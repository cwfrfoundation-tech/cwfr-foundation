import { useEffect, useState, type FormEvent } from 'react';
import application from '@/data/application.json';

const emailField = 'flds9SgoTUNosU3Ll';
const ageField = 'fldeJOgrgg18B6Nur';
const ageConsentField = 'fldxLZJAPS5QFTax2';

type Answer = string | boolean | string[];
const inputClass = 'mt-2 block w-full rounded-lg border border-gray-400 bg-white p-3 text-gray-900';

async function request(body: object) {
  const response = await fetch('/api/application', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Please try again.');
  return data;
}

async function encodePhoto(file: File) {
  const image = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(image.width, image.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) throw new Error('Unable to open the photo. Try a JPEG or PNG image.');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  image.close();
  return { contents: canvas.toDataURL('image/jpeg', 0.86).split(',')[1] };
}

export default function ParticipantApplication() {
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState<{ email: string; hasPhoto: boolean } | null>(null);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [photo, setPhoto] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const age = Number(answers[ageField]);
  const set = (id: string, value: Answer) => setAnswers(previous => id === ageField
    ? { ...previous, [id]: value, [ageConsentField]: '' }
    : { ...previous, [id]: value });

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.slice(1)).get('verify');
    if (!token) return;
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setBusy(true);
    request({ action: 'exchange', token })
      .then(setVerified)
      .catch((issue: Error) => setError(issue.message))
      .finally(() => setBusy(false));
  }, []);

  async function send(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');
    setStatus('');
    try {
      await request({ action: 'verify-email', email });
      setStatus('Check your email for the verification link. It expires in 15 minutes.');
    } catch (issue) {
      setError(issue instanceof Error ? issue.message : 'Please try again.');
    } finally {
      setBusy(false);
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      let encoded;
      if (photo) {
        try {
          encoded = await encodePhoto(photo);
        } catch {
          throw new Error('Your device could not open this photo. Choose a JPEG or PNG image and try again.');
        }
      }
      await request({ action: 'submit', fields: answers, photo: encoded });
      window.location.assign('/orientation');
    } catch (issue) {
      setError(issue instanceof Error ? issue.message : 'Please try again.');
    } finally {
      setBusy(false);
    }
  }

  const message = <>
    {error && <p role="alert" className="mt-4 font-semibold text-red-800">{error}</p>}
    {status && <p role="status" className="mt-4 text-purple-950">{status}</p>}
  </>;

  if (!verified) return (
    <form onSubmit={send} className="rounded-xl border border-purple-200 bg-purple-50 p-5 sm:p-8">
      <h2 className="text-xl font-bold text-purple-950">Verify your email to apply or update your application</h2>
      <p className="mt-2 text-gray-700">Returning applicants should use the email address from their original application.</p>
      <label className="mt-4 block">
        Email address
        <input className={inputClass} required type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      {message}
      <button disabled={busy} className="btn-gold mt-4">{busy ? 'Verifying…' : 'Email me a verification link'}</button>
    </form>
  );

  return (
    <form onSubmit={submit} className="rounded-xl border border-purple-200 bg-white p-5 sm:p-8">
      <h2 className="text-xl font-bold text-purple-950">Participant application</h2>
      <p className="mt-2 break-all text-gray-700">Verified email: {verified.email}</p>
      <fieldset disabled={busy} className="mt-6 grid gap-6">
        {application.filter(field => field.id !== emailField && (!field.minor || (age >= 16 && age < 18))).map(field => {
          const value = answers[field.id];
          if (field.type === 'multipleSelects') {
            const selected = Array.isArray(value) ? value : [];
            return (
              <fieldset key={field.id} className="rounded-lg border border-purple-200 p-4">
                <legend className="font-semibold">{field.label} · select at least one</legend>
                {field.choices?.map(choice => (
                  <label key={choice} className="flex items-start gap-3 py-2">
                    <input className="mt-1 size-4 shrink-0" type="checkbox" checked={selected.includes(choice)}
                      onChange={event => set(field.id, event.target.checked ? [...selected, choice] : selected.filter(item => item !== choice))} />
                    {choice}
                  </label>
                ))}
              </fieldset>
            );
          }
          const stringValue = typeof value === 'string' ? value : '';
          return (
            <label key={field.id} className="block font-semibold">
              {field.type === 'checkbox' && <input className="mr-3 size-4" required type="checkbox"
                checked={value === true} onChange={event => set(field.id, event.target.checked)} />}
              {field.label}
              {field.type === 'multipleAttachments' && <input className={inputClass} type="file" accept="image/*"
                required={!verified.hasPhoto} onChange={event => setPhoto(event.target.files?.[0] || null)} />}
              {field.type === 'multipleAttachments' && verified.hasPhoto && (
                <span className="block text-sm font-normal text-gray-700">A photo is already on file. Leave this empty to keep it.</span>
              )}
              {field.type === 'singleSelect' && (
                <select className={inputClass} required value={stringValue} onChange={event => set(field.id, event.target.value)}>
                  <option value="">Choose an answer</option>
                  {field.choices?.filter((_, index) => field.id !== ageConsentField || index === Math.min(age - 16, 2))
                    .map(choice => <option key={choice}>{choice}</option>)}
                </select>
              )}
              {field.type === 'multilineText' && <textarea className={inputClass} required rows={3} maxLength={5000}
                value={stringValue} onChange={event => set(field.id, event.target.value)} />}
              {['singleLineText', 'number', 'email', 'phoneNumber'].includes(field.type) && (
                <input className={inputClass} required value={stringValue} onChange={event => set(field.id, event.target.value)}
                  type={field.type === 'number' ? 'number' : field.type === 'email' ? 'email' : field.type === 'phoneNumber' ? 'tel' : 'text'}
                  min={field.type === 'number' ? 16 : undefined} max={field.type === 'number' ? 24 : undefined} maxLength={5000} />
              )}
            </label>
          );
        })}
        {message}
        <button className="btn-gold justify-self-start">{busy ? 'Saving…' : 'Save and continue to orientation'}</button>
      </fieldset>
    </form>
  );
}
