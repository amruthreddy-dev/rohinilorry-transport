/**
 * Utility functions for Rohini Lorry Transport WhatsApp Booking & Form Validation
 */

export interface ServiceEnquiryData {
  service: string;
  name: string;
  phone: string;
  route: string; // "Where to Where"
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ServiceEnquiryData, string>>;
}

export const PRIMARY_PHONE = '9492609349';
export const SECONDARY_PHONE = '9985609349';
export const WHATSAPP_NUMBER = '919492609349';
export const OFFICE_ADDRESS = 'HRT Complex, 1st Floor, Shop No. 7, Swathi Road, Bhavanipuram, Vijayawada – 520012, Andhra Pradesh';

/**
 * Strips non-digits, country code, and leading zero
 */
export function sanitizePhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

/**
 * Validates the core 3 fields: Name, Phone, and Route (Where to Where)
 */
export function validateServiceEnquiry(data: ServiceEnquiryData): ValidationResult {
  const errors: Partial<Record<keyof ServiceEnquiryData, string>> = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please enter your name';
  } else if (trimmedName.length < 2) {
    errors.name = 'Please enter at least 2 characters';
  }

  const cleanPhone = sanitizePhoneNumber(data.phone);
  if (!cleanPhone) {
    errors.phone = 'Please enter your phone number';
  } else if (cleanPhone.length !== 10) {
    errors.phone = 'Please enter a valid 10-digit mobile number';
  }

  const trimmedRoute = data.route.trim();
  if (!trimmedRoute) {
    errors.route = 'Please enter pickup and destination (Where to Where)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates a clean, genuine WhatsApp enquiry message for N. Babu Reddy
 */
export function formatWhatsAppServiceMessage(data: ServiceEnquiryData): string {
  const cleanPhone = data.phone.trim();
  const serviceTitle = data.service || 'Lorry Transport Enquiry';

  const lines: string[] = [
    `*ROHINI LORRY TRANSPORT* (రోహిణి లారీ ట్రాన్స్పోర్ట్)`,
    `Vijayawada, Andhra Pradesh`,
    `────────────────────`,
    `*Service:* ${serviceTitle}`,
    `*Customer Name:* ${data.name.trim()}`,
    `*Phone Number:* ${cleanPhone}`,
    `*Route (Where to Where):* ${data.route.trim()}`,
    `────────────────────`,
    `Direct enquiry to N. Babu Reddy`,
  ];

  return lines.join('\n');
}

/**
 * Builds the direct WhatsApp URL for 919492609349
 */
export function buildWhatsAppUrl(data: ServiceEnquiryData): string {
  const message = formatWhatsAppServiceMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
