import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizePhoneNumber,
  validateServiceEnquiry,
  formatWhatsAppServiceMessage,
  buildWhatsAppUrl,
  OFFICE_ADDRESS,
} from './booking';

test('sanitizePhoneNumber cleans Indian phone formats', () => {
  assert.equal(sanitizePhoneNumber('+91 9492609349'), '9492609349');
  assert.equal(sanitizePhoneNumber('09492609349'), '9492609349');
  assert.equal(sanitizePhoneNumber('9492609349'), '9492609349');
});

test('validateServiceEnquiry checks name, phone, and route', () => {
  const invalid = validateServiceEnquiry({
    service: 'Book a Lorry',
    name: '',
    phone: '',
    route: '',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.route);

  const valid = validateServiceEnquiry({
    service: 'Book a Lorry',
    name: 'Srinivas',
    phone: '9492609349',
    route: 'Vijayawada to Hyderabad',
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('formatWhatsAppServiceMessage includes service, name, phone, route without fake clutter', () => {
  const msg = formatWhatsAppServiceMessage({
    service: 'Heavy Vehicle Transport',
    name: 'K. Prasad',
    phone: '9988776655',
    route: 'Vijayawada to Bengaluru',
  });

  assert.match(msg, /Heavy Vehicle Transport/);
  assert.match(msg, /K\. Prasad/);
  assert.match(msg, /9988776655/);
  assert.match(msg, /Vijayawada to Bengaluru/);
  assert.match(msg, /ROHINI LORRY TRANSPORT/);
});

test('buildWhatsAppUrl points to 919492609349', () => {
  const url = buildWhatsAppUrl({
    service: 'Book a Lorry',
    name: 'Raju',
    phone: '9492609349',
    route: 'Guntur to Chennai',
  });

  assert.match(url, /^https:\/\/wa\.me\/919492609349\?text=/);
});

test('office address matches user specification at HRT complex', () => {
  assert.match(OFFICE_ADDRESS, /HRT Complex/i);
  assert.match(OFFICE_ADDRESS, /1st Floor/i);
  assert.match(OFFICE_ADDRESS, /Shop No\. 7/i);
  assert.match(OFFICE_ADDRESS, /Swathi Road/i);
  assert.match(OFFICE_ADDRESS, /Bhavanipuram/i);
});
