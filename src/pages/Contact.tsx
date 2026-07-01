import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, CheckCircle, Send } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/ui/SEO'
import { COMPANY_INFO } from '../lib/constants'
import { IMAGES } from '../lib/images'

interface FormState {
  name: string
  company: string
  email: string
  subject: string
  message: string
}

const SUBJECTS = [
  'Product Enquiry',
  'Export & Trading',
  'Investment Opportunity',
  'Haulage Services',
  'Partnership',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', company: '', email: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Nifa Farms Limited. For product enquiries, export partnerships, investment opportunities, and haulage services. Based in Offinso–Ahenkro, Ashanti Region, Ghana. Tel: +233 247 023 698."
        path="/contact"
      />
      {/* Page Hero */}
      <section className="relative bg-forest-950 pt-36 pb-20 grain-overlay overflow-hidden">
        <div className="page-hero-bg">
          <img src={IMAGES.officeReception} alt="" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-forest-950/50 to-forest-950/85" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 mb-5">Get in Touch</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display-heading text-white text-5xl sm:text-6xl lg:text-7xl max-w-xl">
              Let's Start a<br />Conversation.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 mt-6 text-base sm:text-lg max-w-md leading-relaxed">
              Whether you are a buyer, investor, or logistics partner — we want to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-gap bg-stone-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="display-heading text-forest-950 text-3xl mb-10">Contact Details</h2>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: 'Office',
                    value: COMPANY_INFO.address,
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: COMPANY_INFO.phone,
                    href: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: COMPANY_INFO.email,
                    href: `mailto:${COMPANY_INFO.email}`,
                  },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <ScrollReveal key={label} delay={i * 0.08}>
                    <div className="flex items-start gap-5">
                      <div className="w-10 h-10 bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-forest-700" />
                      </div>
                      <div>
                        <p className="eyebrow text-stone-400 mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-forest-950 text-base font-medium hover:text-forest-700 transition-colors duration-200 leading-relaxed">
                            {value}
                          </a>
                        ) : (
                          <p className="text-forest-950 text-base font-medium leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Secondary contact */}
              <ScrollReveal delay={0.24}>
                <div className="mt-12 p-6 bg-forest-950 text-white">
                  <p className="eyebrow text-gold-400/70 mb-4">Alternative Contact</p>
                  <a
                    href="mailto:dericktinkler2231@gmail.com"
                    className="text-base text-white/60 hover:text-white transition-colors duration-200 block"
                  >
                    dericktinkler2231@gmail.com
                  </a>
                  <div className="divider-dark mt-5 pt-5">
                    <p className="text-white/25 text-sm sm:text-base leading-relaxed">
                      For investment and corporate inquiries, please reference your company and purpose in all correspondence.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.06}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-white p-12 lg:p-16 flex flex-col items-start"
                    >
                      <div className="w-14 h-14 bg-forest-50 border border-forest-100 flex items-center justify-center mb-8">
                        <CheckCircle size={22} className="text-forest-600" />
                      </div>
                      <h3 className="font-display text-2xl text-forest-950 font-semibold mb-4">
                        Message received.
                      </h3>
                      <p className="text-stone-500 text-base leading-relaxed mb-8 max-w-sm">
                        Thank you for reaching out. A member of the Nifa Farms team will respond to your enquiry within two business days.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', subject: '', message: '' }) }}
                        className="btn-ghost text-forest-600"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="bg-white p-8 lg:p-12 space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block eyebrow text-stone-400 mb-2" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-forest-950 placeholder-stone-300 focus:outline-none focus:border-forest-500 focus:bg-white transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block eyebrow text-stone-400 mb-2" htmlFor="company">
                            Company / Organisation
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-forest-950 placeholder-stone-300 focus:outline-none focus:border-forest-500 focus:bg-white transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block eyebrow text-stone-400 mb-2" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-forest-950 placeholder-stone-300 focus:outline-none focus:border-forest-500 focus:bg-white transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block eyebrow text-stone-400 mb-2" htmlFor="subject">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-forest-950 focus:outline-none focus:border-forest-500 focus:bg-white transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>Select a subject</option>
                          {SUBJECTS.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block eyebrow text-stone-400 mb-2" htmlFor="message">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Please describe your enquiry in as much detail as possible..."
                          className="w-full border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-forest-950 placeholder-stone-300 focus:outline-none focus:border-forest-500 focus:bg-white transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                            />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-stone-100">
        <div className="container-wide py-10 lg:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200">
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-forest-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-display text-forest-950 text-xl font-medium">Nifa Farms Limited</p>
              <p className="text-stone-500 text-base mt-1">{COMPANY_INFO.address}</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=NIFA+FARMS+LIMITED"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-600 text-base font-medium hover:text-forest-500 transition-colors duration-200 shrink-0"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="relative w-full h-72 lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1054826906793!2d-1.6470909246727592!3d6.877964393120866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbbb85dc8a63c5%3A0x94d80d5cb4b0d173!2sNIFA%20FARMS%20LIMITED!5e0!3m2!1sen!2sgh!4v1782825808653!5m2!1sen!2sgh"
            title="Nifa Farms Limited location on Google Maps"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  )
}
