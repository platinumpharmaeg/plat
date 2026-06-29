import { NextResponse } from 'next/server';
import {
  buildCareersAutoReplyHtml,
  emailConfig,
  escapeHtml,
  getResendClient,
} from '@/lib/email';
import { getCorsHeaders, jsonWithCors } from '@/lib/cors';

export const runtime = 'nodejs';

const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function getField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function getOptionalList(formData: FormData, key: string) {
  const value = getField(formData, key);
  return value ? value.split('||').filter(Boolean) : [];
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = getField(formData, 'fullName');
    const email = getField(formData, 'email');
    const mobile = getField(formData, 'mobile');
    const city = getField(formData, 'city');
    const degree = getField(formData, 'degree');
    const university = getField(formData, 'university');
    const experience = getField(formData, 'experience');
    const jobTitle = getField(formData, 'jobTitle');
    const department = getField(formData, 'department');
    const linkedin = getField(formData, 'linkedin');
    const drivingLicense = getField(formData, 'drivingLicense');
    const hasCar = getField(formData, 'hasCar');
    const pharmaExperience = getField(formData, 'pharmaExperience');
    const governoratesCovered = getField(formData, 'governoratesCovered');
    const accountTypes = getOptionalList(formData, 'accountTypes');
    const therapeuticAreas = getOptionalList(formData, 'therapeuticAreas');
    const cvFile = formData.get('cv');

    if (!fullName || !email || !mobile || !city || !degree || !university || !experience || !jobTitle || !department) {
      return jsonWithCors(request, { error: 'Please fill in all required fields.' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonWithCors(request, { error: 'Please enter a valid email address.' }, 400);
    }

    if (!(cvFile instanceof File) || cvFile.size === 0) {
      return jsonWithCors(request, { error: 'Please upload your CV.' }, 400);
    }

    if (cvFile.size > MAX_CV_SIZE_BYTES) {
      return jsonWithCors(request, { error: 'CV file size must be 5MB or less.' }, 400);
    }

    if (cvFile.type && !ALLOWED_CV_TYPES.has(cvFile.type)) {
      return jsonWithCors(
        request,
        { error: 'CV must be a PDF, DOC, or DOCX file.' },
        400
      );
    }

    const resend = getResendClient();
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    const hrHtml = `
      <div style="font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6;">
        <h2 style="margin-top: 0;">New Careers Application</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile / WhatsApp:</strong> ${escapeHtml(mobile)}</p>
        <p><strong>City / Governorate:</strong> ${escapeHtml(city)}</p>
        <p><strong>Degree:</strong> ${escapeHtml(degree)}</p>
        <p><strong>University / Faculty:</strong> ${escapeHtml(university)}</p>
        <p><strong>Years of Experience:</strong> ${escapeHtml(experience)}</p>
        <p><strong>Current / Most Recent Job Title:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Department of Interest:</strong> ${escapeHtml(department)}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${escapeHtml(linkedin)}</p>` : ''}
        ${
          drivingLicense || hasCar || pharmaExperience || governoratesCovered || accountTypes.length || therapeuticAreas.length
            ? `<hr />
        <h3>Field-force details</h3>
        ${drivingLicense ? `<p><strong>Driving license:</strong> ${escapeHtml(drivingLicense)}</p>` : ''}
        ${hasCar ? `<p><strong>Has car:</strong> ${escapeHtml(hasCar)}</p>` : ''}
        ${pharmaExperience ? `<p><strong>Pharma field experience:</strong> ${escapeHtml(pharmaExperience)}</p>` : ''}
        ${governoratesCovered ? `<p><strong>Governorates covered:</strong> ${escapeHtml(governoratesCovered)}</p>` : ''}
        ${accountTypes.length ? `<p><strong>Account type experience:</strong> ${escapeHtml(accountTypes.join(', '))}</p>` : ''}
        ${therapeuticAreas.length ? `<p><strong>Therapeutic areas:</strong> ${escapeHtml(therapeuticAreas.join(', '))}</p>` : ''}`
            : ''
        }
        <p>The candidate CV is attached to this email.</p>
      </div>
    `;

    const hrResult = await resend.emails.send({
      from: emailConfig.from,
      to: [emailConfig.careersTo],
      replyTo: email,
      subject: `New CV Application - ${fullName}`,
      html: hrHtml,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
        },
      ],
    });

    if (hrResult.error) {
      console.error('Careers HR email error:', hrResult.error);
      return jsonWithCors(
        request,
        { error: 'Unable to send your application right now. Please try again later.' },
        500
      );
    }

    const autoReplyResult = await resend.emails.send({
      from: emailConfig.from,
      to: [email],
      subject: 'Your CV has been received - Platinum Pharma',
      html: buildCareersAutoReplyHtml(escapeHtml(fullName)),
    });

    if (autoReplyResult.error) {
      console.error('Careers auto-reply error:', autoReplyResult.error);
    }

    return jsonWithCors(request, { success: true });
  } catch (error) {
    console.error('Careers form error:', error);
    return jsonWithCors(
      request,
      { error: 'Unable to send your application right now. Please try again later.' },
      500
    );
  }
}
