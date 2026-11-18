import { createRequire } from 'node:module';

const fields = createRequire(import.meta.url)('./application.json');

export const emailField = 'flds9SgoTUNosU3Ll';
export const ageField = 'fldeJOgrgg18B6Nur';
export const ageConsentField = 'fldxLZJAPS5QFTax2';
export const photoField = 'fldp6DmVnOwpkpzVq';

export function normalizeEmail(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

export function validEmail(value) {
  return value.length <= 254 && /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(value);
}

export function validateApplication(input, verifiedEmail) {
  const age = Number(input?.[ageField]);
  if (!Number.isInteger(age) || age < 16 || age > 24) {
    return { error: 'Enter an age from 16 to 24.' };
  }
  if (!validEmail(verifiedEmail)) {
    return { error: 'Verify your email address before submitting.' };
  }

  const values = { [emailField]: verifiedEmail, [ageField]: age };
  for (const field of fields) {
    if ([emailField, ageField, photoField].includes(field.id) || (field.minor && age >= 18)) continue;
    const raw = input[field.id];
    const value = typeof raw === 'string' ? raw.trim() : raw;
    let valid;
    switch (field.type) {
      case 'checkbox':
        valid = value === true;
        break;
      case 'multipleSelects':
        valid = Array.isArray(value) && value.length > 0 &&
          new Set(value).size === value.length && value.every(choice => field.choices.includes(choice));
        break;
      case 'singleSelect':
        valid = field.id === ageConsentField
          ? value === field.choices[Math.min(age - 16, 2)]
          : field.choices.includes(value);
        break;
      case 'email':
        valid = typeof value === 'string' && validEmail(value);
        break;
      default:
        valid = typeof value === 'string' && value.length > 0 && value.length <= 5000;
    }
    if (!valid) return { error: `Complete “${field.label}” before submitting.` };
    values[field.id] = value;
  }
  return { values };
}
