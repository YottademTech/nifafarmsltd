import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ContactEmailError, sendContactEmail, type ContactPayload } from './lib/sendContactEmail'

export const config = {
  maxDuration: 30,
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await sendContactEmail(req.body as Partial<ContactPayload>)
    return res.status(200).json({ ok: true })
  } catch (err) {
    if (err instanceof ContactEmailError) {
      return res.status(err.statusCode).json({ error: err.message })
    }
    console.error('Contact form handler failed:', err)
    return res.status(500).json({ error: 'Unable to send your message. Please try again or email us directly.' })
  }
}
