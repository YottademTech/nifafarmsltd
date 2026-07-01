import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  company?: string
  email: string
  subject: string
  message: string
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getTransporter() {
  const user = process.env.ZOHO_SMTP_USER
  const pass = process.env.ZOHO_SMTP_PASS

  if (!user || !pass) {
    throw new Error('Email service is not configured')
  }

  const host = process.env.ZOHO_SMTP_HOST ?? 'smtp.zoho.com'
  const port = Number(process.env.ZOHO_SMTP_PORT ?? 465)
  const secure = port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body as Partial<ContactPayload>
  const name = body.name?.trim()
  const company = body.company?.trim() ?? ''
  const email = body.email?.trim()
  const subject = body.subject?.trim()
  const message = body.message?.trim()

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const to = process.env.CONTACT_TO_EMAIL ?? process.env.ZOHO_SMTP_USER
  if (!to) {
    return res.status(503).json({ error: 'Email service is not configured.' })
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
    const transporter = getTransporter()
    await transporter.sendMail({
      from: `"Nifa Farms Website" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `[Nifa Farms] ${subject} — ${name}`,
      text: plainText,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact form email failed:', err)
    return res.status(500).json({ error: 'Unable to send your message. Please try again or email us directly.' })
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
