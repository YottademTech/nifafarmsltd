import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ContactEmailError, sendContactEmail, type ContactPayload } from './lib/sendContactEmail'

function parseBody(req: VercelRequest): Partial<ContactPayload> {
  if (req.body == null) return {}
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as Partial<ContactPayload>
    } catch {
      return {}
    }
  }
  return req.body as Partial<ContactPayload>
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await sendContactEmail(parseBody(req))
    return res.status(200).json({ ok: true })
  } catch (err) {
    if (err instanceof ContactEmailError) {
      return res.status(err.statusCode).json({ error: err.message })
    }
    console.error('Contact form handler failed:', err instanceof Error ? err.stack ?? err.message : err)
    return res.status(500).json({ error: 'Unable to send your message. Please try again or email us directly.' })
  }
}
