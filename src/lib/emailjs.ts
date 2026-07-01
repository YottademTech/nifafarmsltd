import emailjs from '@emailjs/browser'

export interface ContactFormParams {
  name: string
  company: string
  email: string
  subject: string
  message: string
}

function requireEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing ${name}. Add it to .env and redeploy.`)
  }
  return value
}

export async function sendContactForm(params: ContactFormParams): Promise<void> {
  const serviceId = requireEnv('VITE_EMAILJS_SERVICE_ID')
  const templateId = requireEnv('VITE_EMAILJS_TEMPLATE_ID')
  const publicKey = requireEnv('VITE_EMAILJS_PUBLIC_KEY')

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: params.name,
      company: params.company || '—',
      email: params.email,
      subject: params.subject,
      message: params.message,
      reply_to: params.email,
    },
    { publicKey },
  )
}

export function isEmailJsConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID
    && import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    && import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  )
}
