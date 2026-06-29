import { NextResponse } from 'next/server';
import {
  buildContactAutoReplyHtml,
  emailConfig,
  escapeHtml,
  getResendClient,
} from '@/lib/email';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const subject = body.subject?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const resend = getResendClient();

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6;">
        <h2 style="margin-top: 0;">New Contact Form Message</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(name)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: emailConfig.from,
      to: [emailConfig.contactTo],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html,
    });

    if (result.error) {
      console.error('Contact email error:', result.error);
      return NextResponse.json(
        { error: 'Unable to send your message right now. Please try again later.' },
        { status: 500 }
      );
    }

    const autoReplyResult = await resend.emails.send({
      from: emailConfig.from,
      to: [email],
      subject: 'We received your message - Platinum Pharma',
      html: buildContactAutoReplyHtml(escapeHtml(name)),
    });

    if (autoReplyResult.error) {
      console.error('Contact auto-reply error:', autoReplyResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 }
    );
  }
}
