import nodemailer from 'nodemailer'

export interface ContactPayload {
  name: string
  company?: string
  email: string
  subject: string
  message: string
}

export class ContactEmailError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function getTransporter(port: number) {
  const user = process.env.ZOHO_SMTP_USER
  const pass = process.env.ZOHO_SMTP_PASS

  if (!user || !pass) {
    throw new ContactEmailError(503, 'Email service is not configured.')
  }

  const host = process.env.ZOHO_SMTP_HOST ?? 'smtp.zoho.com'
  const secure = port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
    tls: { minVersion: 'TLSv1.2' },
    ...(port === 587 ? { requireTLS: true } : {}),
  })
}

function smtpPorts(): number[] {
  const preferred = Number(process.env.ZOHO_SMTP_PORT ?? 465)
  return preferred === 587 ? [587, 465] : [465, 587]
}

async function sendMailWithFallback(
  mail: nodemailer.SendMailOptions,
): Promise<void> {
  const ports = smtpPorts()
  let lastError: unknown

  for (const port of ports) {
    try {
      const transporter = getTransporter(port)
      await transporter.sendMail(mail)
      return
    } catch (err) {
      lastError = err
      console.error(`SMTP send failed on port ${port}:`, err instanceof Error ? err.message : err)
    }
  }

  throw lastError
}

export async function sendContactEmail(body: Partial<ContactPayload>): Promise<void> {
  const name = body.name?.trim()
  const company = body.company?.trim() ?? ''
  const email = body.email?.trim()
  const subject = body.subject?.trim()
  const message = body.message?.trim()

  if (!name || !email || !subject || !message) {
    throw new ContactEmailError(400, 'Please fill in all required fields.')
  }

  if (!isValidEmail(email)) {
    throw new ContactEmailError(400, 'Please enter a valid email address.')
  }

  const to = process.env.CONTACT_TO_EMAIL ?? process.env.ZOHO_SMTP_USER
  if (!to) {
    throw new ContactEmailError(503, 'Email service is not configured.')
  }

  const from = process.env.ZOHO_SMTP_USER!
  const submittedAt = new Date().toLocaleString('en-GB', { timeZone: 'Africa/Accra' })

  const plainText = [
    'New enquiry from the Nifa Farms website',
    '',
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Submitted: ${submittedAt} (Ghana time)`,
    '',
    'Message:',
    message,
  ].filter(Boolean).join('\n')

  const html = `
    <h2>New enquiry from the Nifa Farms website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)} (Ghana time)</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `

  try {
    await sendMailWithFallback({
      from: `"Nifa Farms Website" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Nifa Farms] ${subject} — ${name}`,
      text: plainText,
      html,
    })
  } catch (err) {
    console.error('Contact form email failed:', err instanceof Error ? err.stack ?? err.message : err)
    throw new ContactEmailError(
      500,
      'Unable to send your message. Please try again or email us directly.',
    )
  }
}
