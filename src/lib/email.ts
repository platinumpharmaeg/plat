import { Resend } from 'resend';

let resendClient: Resend | null = null;

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export const emailConfig = {
  from:
    process.env.RESEND_FROM_EMAIL ??
    'Platinum Pharma <noreply@platinumpharma-eg.com>',
  careersTo: process.env.CAREERS_TO_EMAIL ?? 'Hr@platinumpharma-eg.com',
  contactTo: process.env.CONTACT_TO_EMAIL ?? 'info@platinumpharma-eg.com',
};

export function buildCareersAutoReplyHtml(candidateName: string) {
  return `
    <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 640px;">
      <p>Dear ${candidateName},</p>
      <p>Thank you for submitting your CV to Platinum Pharma.</p>
      <p>
        Your application has been received successfully. Our team will review your profile against
        current and future opportunities. If your experience matches a suitable role, we will contact
        you through our official communication channels.
      </p>
      <p>
        Best regards,<br />
        Platinum Pharma Recruitment Team
      </p>
    </div>
  `;
}

export function buildContactAutoReplyHtml(name: string) {
  return `
    <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6; max-width: 640px;">
      <p>Dear ${name},</p>
      <p>Thank you for contacting Platinum Pharma.</p>
      <p>
        We have received your message successfully. Our team will review your inquiry and get back to
        you through our official communication channels as soon as possible.
      </p>
      <p>
        Best regards,<br />
        Platinum Pharma Team
      </p>
    </div>
  `;
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
