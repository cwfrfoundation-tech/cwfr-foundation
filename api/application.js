import { createHmac, timingSafeEqual } from 'node:crypto';
import nodemailer from 'nodemailer';
import { emailField, photoField, normalizeEmail, validEmail, validateApplication } from '../src/data/application-fields.mjs';

const origin = 'https://www.charlesworkforce.org';
const sender = 'cwfrfoundation@gmail.com';
const base = 'app1ixGUs4jrxEBpo';
const table = 'tblUX1lEjyUtvwF6l';
const cookieName = '__Host-cwfr-application';
const emailRequests = new Map();

function sign(email, purpose, minutes) {
  const payload = Buffer.from(JSON.stringify({ email, purpose, expires: Date.now() + minutes * 60_000 })).toString('base64url');
  return payload + '.' + digest(payload).toString('base64url');
}

function digest(payload) {
  return createHmac('sha256', process.env.AIRTABLE_API_TOKEN).update('cwfr-application/v1/').update(payload).digest();
}

function verify(token, purpose) {
  if (typeof token !== 'string' || token.length > 1024) return null;
  const [payload, signature, extra] = token.split('.');
  if (!payload || !signature || extra !== undefined) return null;
  const actual = Buffer.from(signature, 'base64url');
  const expected = digest(payload);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
  try {
    const { email, purpose: type, expires } = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return type === purpose && expires > Date.now() && validEmail(email) ? email : null;
  } catch {
    return null;
  }
}

async function airtable(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { Authorization: 'Bearer ' + process.env.AIRTABLE_API_TOKEN, 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error('Airtable returned ' + response.status);
  return response.json();
}

const recordsUrl = 'https://api.airtable.com/v0/' + base + '/' + table;

async function findRecord(email) {
  const query = new URLSearchParams({
    filterByFormula: 'LOWER(TRIM({Email Address}))=' + JSON.stringify(email),
    maxRecords: '2',
    returnFieldsByFieldId: 'true',
  });
  query.append('fields[]', emailField);
  query.append('fields[]', photoField);
  const { records } = await airtable(recordsUrl + '?' + query);
  return { record: records[0], ambiguous: records.length > 1 };
}

function write(url, method, body) {
  return airtable(url, { method, body: JSON.stringify(body) });
}

function readPhoto(file) {
  if (!file || typeof file.contents !== 'string' || file.contents.length > 3_600_000 ||
    !/^[a-zA-Z0-9+/]+={0,2}$/.test(file.contents)) return null;
  const data = Buffer.from(file.contents, 'base64');
  if (data.length < 12) return null;
  const jpeg = data[0] === 255 && data[1] === 216 && data[2] === 255;
  const png = data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  if (!jpeg && !png) return null;
  return { contentType: jpeg ? 'image/jpeg' : 'image/png', filename: jpeg ? 'participant-photo.jpg' : 'participant-photo.png', file: file.contents };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST' || req.headers.origin !== origin) return res.status(405).json({ error: 'Request unavailable.' });
  if (!process.env.AIRTABLE_API_TOKEN || !process.env.CWFR_GMAIL_APP_PASSWORD) {
    return res.status(503).json({ error: 'Online applications are temporarily unavailable.' });
  }
  const body = req.body;
  try {
    if (body?.action === 'verify-email') {
      const email = normalizeEmail(body.email);
      if (!validEmail(email)) return res.status(400).json({ error: 'Enter a valid email address.' });
      const now = Date.now();
      for (const [key, expiration] of emailRequests) {
        if (expiration <= now) emailRequests.delete(key);
      }
      const ip = String(req.headers['x-vercel-forwarded-for'] || req.socket?.remoteAddress || 'unknown');
      if (emailRequests.has(email) || emailRequests.has(ip) || emailRequests.size >= 100) {
        return res.status(429).json({ error: 'Please wait a minute before requesting another link.' });
      }
      emailRequests.set(email, now + 60_000);
      emailRequests.set(ip, now + 60_000);
      const link = origin + '/apply#verify=' + sign(email, 'verify', 15);
      const smtp = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465, secure: true,
        auth: { user: sender, pass: process.env.CWFR_GMAIL_APP_PASSWORD.replace(/\s/g, '') },
        connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 10000,
      });
      await smtp.sendMail({
        from: sender, to: email, subject: 'Verify your CWFR application email',
        text: 'Open this link within 15 minutes to continue your CWFR application:\n\n' + link + '\n\nIf you did not request this link, you can ignore this email.',
      });
      return res.status(200).json({ sent: true });
    }

    if (body?.action === 'exchange') {
      const email = verify(body.token, 'verify');
      if (!email) return res.status(401).json({ error: 'That verification link has expired. Request a new one.' });
      const { record, ambiguous } = await findRecord(email);
      if (ambiguous) return res.status(409).json({ error: 'CWFR needs to review this application. Please contact the foundation.' });
      const session = sign(email, 'session', 90);
      res.setHeader('Set-Cookie', cookieName + '=' + session + '; Max-Age=5400; Path=/; HttpOnly; Secure; SameSite=Strict');
      return res.status(200).json({ email, hasPhoto: Boolean(record?.fields[photoField]?.length) });
    }

    if (body?.action !== 'submit') return res.status(400).json({ error: 'Unknown application request.' });
    const cookie = (req.headers.cookie || '').split(';').map(item => item.trim()).find(item => item.startsWith(cookieName + '='));
    const email = verify(cookie?.slice(cookieName.length + 1), 'session');
    if (!email) return res.status(401).json({ error: 'Verify your email again before submitting.' });
    const { values, error } = validateApplication(body.fields, email);
    if (error) return res.status(400).json({ error });

    let { record, ambiguous } = await findRecord(email);
    if (ambiguous) return res.status(409).json({ error: 'CWFR needs to review this application. Please contact the foundation.' });
    const photo = readPhoto(body.photo);
    if ((body.photo && !photo) || (!record?.fields[photoField]?.length && !photo)) {
      return res.status(400).json({ error: 'Choose a clear JPEG or PNG participant photo.' });
    }
    if (!record) {
      const result = await write(recordsUrl, 'PATCH', {
        performUpsert: { fieldsToMergeOn: [emailField] },
        records: [{ fields: { [emailField]: email } }],
      });
      record = result.records[0];
    }
    if (photo) {
      await write('https://content.airtable.com/v0/' + base + '/' + record.id + '/' + photoField + '/uploadAttachment', 'POST', photo);
    }
    await write(recordsUrl + '/' + record.id, 'PATCH', { fields: values });
    return res.status(200).json({ saved: true });
  } catch (error) {
    console.error('CWFR application request failed', error instanceof Error ? error.name : 'Error');
    return res.status(503).json({ error: 'We could not complete the request. Please try again.' });
  }
}
