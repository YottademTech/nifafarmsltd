import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, MapPin, Truck, Sprout, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { STATS, PRODUCTS, MARKETS, CLIENTS, SUSTAINABILITY_PILLARS } from '../lib/constants'

const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.category !== 'Services').slice(0, 6)

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end grain-overlay bg-forest-950 overflow-hidden">
        {/* Background rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.035]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.045]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.06]" />
          {/* Gold accent dot */}
          <div className="absolute top-[28%] right-[18%] w-1.5 h-1.5 rounded-full bg-gold-400/40" />
          <div className="absolute top-[55%] left-[12%] w-1 h-1 rounded-full bg-gold-400/25" />
          <div className="absolute bottom-[30%] right-[30%] w-1 h-1 rounded-full bg-forest-300/20" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 pb-24 lg:pb-32 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-gold-400/80 text-[10px] mb-8 tracking-[0.28em]"
          >
            Nifa Farms Limited · Est. 2018 · Offinso, Ghana
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="display-heading text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl max-w-4xl mb-8"
          >
            From Ghana's Soil<br />
            <em className="not-italic text-forest-300">to the World.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-base lg:text-lg max-w-lg leading-relaxed mb-12"
          >
            Ghana's premier cocoa and shea nuts processing enterprise — delivering quality and reliability from farm to global market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link to="/products" className="btn-primary">
              Explore Products
              <ArrowRight size={15} />
            </Link>
            <Link to="/about" className="btn-ghost text-white/60 hover:text-white flex items-center gap-2">
              Our Story
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <section className="bg-forest-700">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className={`py-12 px-6 lg:px-8 ${i < STATS.length - 1 ? 'lg:border-r border-white/10' : ''} ${i % 2 === 0 ? 'border-r border-white/10 lg:border-r-0' : ''} ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-4xl lg:text-5xl font-semibold text-white">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-gold-400 text-sm font-medium ml-1">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs tracking-wider uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────── */}
      <section className="section-gap bg-stone-50">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <ScrollReveal>
                <p className="eyebrow text-forest-600 text-[10px] mb-4">What We Produce</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl">
                  Premium Cocoa &<br />Shea Products
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.12}>
              <Link to="/products" className="btn-ghost text-forest-600 hover:text-forest-500 group">
                View all products
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.06}>
                <Link
                  to="/products"
                  className="group bg-white p-8 lg:p-10 flex flex-col h-full hover:bg-stone-50 transition-colors duration-300"
                >
                  {/* Color swatch */}
                  <div
                    className="w-8 h-8 rounded-sm mb-8 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: product.color }}
                  />
                  <span className={`eyebrow text-[9px] mb-3 ${
                    product.category === 'Cocoa' ? 'text-amber-700' : 'text-forest-600'
                  }`}>
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-forest-950 mb-3 group-hover:text-forest-700 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1">{product.description}</p>
                  <div className="flex items-center gap-1.5 mt-6 text-forest-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────── */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Visual */}
            <ScrollReveal y={30}>
              <div className="relative">
                <div className="aspect-[4/3] bg-forest-800 relative overflow-hidden">
                  {/* Stylised composition */}
                  <div className="absolute inset-0 grain-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-forest-950/80 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <p className="eyebrow text-gold-400/80 text-[10px] mb-3">Est. 2018</p>
                    <p className="font-display text-white text-2xl font-medium leading-snug">
                      "Committed to delivering high‑quality, reliable supply solutions."
                    </p>
                  </div>
                  {/* Decorative lines */}
                  <div className="absolute top-8 right-8 w-16 h-16 border border-white/10" />
                  <div className="absolute top-10 right-10 w-16 h-16 border border-white/5" />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 hidden lg:block">
                  <p className="font-display text-3xl font-bold">21</p>
                  <p className="text-[11px] tracking-wider uppercase text-white/80 mt-1">Truck Fleet</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <div>
              <ScrollReveal>
                <p className="eyebrow text-forest-600 text-[10px] mb-4">About Nifa Farms</p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl mb-6">
                  Built in Ghana.<br />
                  <em className="not-italic text-forest-600">Built for the World.</em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="text-stone-500 leading-relaxed mb-6">
                  Since 2018, Nifa Farms has evolved from a poultry farm into one of Ghana's most ambitious agri-processing enterprises. From our base in Offinso–Ahenkro, Ashanti Region, we operate cocoa farms, a commodity haulage fleet, and an aggregation network spanning the country.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="text-stone-500 leading-relaxed mb-10">
                  From June 2027, we will commission a 32,000 MT annual capacity processing facility for cocoa and shea nuts — supplying premium semi-finished products to buyers across Europe, Asia, and North America.
                </p>
              </ScrollReveal>

              {/* Mini services grid */}
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Sprout, label: '1,200+ ha', sub: 'Cocoa Farms' },
                    { icon: Truck, label: '21 Trucks', sub: 'Haulage' },
                    { icon: MapPin, label: 'Ashanti', sub: 'Ghana' },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="border border-stone-100 p-4">
                      <Icon size={16} className="text-forest-600 mb-3" />
                      <p className="text-sm font-semibold text-forest-950">{label}</p>
                      <p className="text-xs text-stone-400 mt-0.5">{sub}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <Link to="/about" className="btn-primary mt-10 text-xs">
                  Our Full Story
                  <ArrowRight size={14} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ────────────────────────── */}
      <section className="section-gap bg-forest-900 grain-overlay">
        <div className="container-wide relative z-10">
          <div className="max-w-xl mb-16">
            <ScrollReveal>
              <p className="eyebrow text-gold-400/70 text-[10px] mb-4">Our Commitments</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="display-heading text-white text-4xl lg:text-5xl">
                People, Planet,<br />Performance.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
            {SUSTAINABILITY_PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.07}>
                <div className="bg-forest-950/60 p-10 hover:bg-forest-800/40 transition-colors duration-300">
                  <span className="block w-6 h-px bg-gold-500 mb-7" />
                  <h3 className="font-display text-xl text-white font-medium mb-4">{pillar.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.28}>
            <Link to="/sustainability" className="inline-flex items-center gap-2 mt-10 text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors duration-200">
              Our sustainability commitments
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MARKETS ───────────────────────────────── */}
      <section className="section-gap-sm bg-stone-100">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
            <ScrollReveal className="shrink-0">
              <p className="eyebrow text-[10px] text-forest-600 mb-3">Export Markets</p>
              <h2 className="display-heading text-forest-950 text-3xl lg:text-4xl">
                Our Global<br />Reach
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex-1">
              <div className="flex flex-wrap gap-2.5">
                {MARKETS.map((market) => (
                  <span
                    key={market}
                    className="border border-forest-700/30 text-forest-700 text-xs font-medium px-4 py-2 tracking-wide"
                  >
                    {market}
                  </span>
                ))}
              </div>
              <p className="text-stone-400 text-xs mt-6 leading-relaxed">
                Strategically positioned to take advantage of AfCFTA — a single continental market serving 54 African nations and growing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────── */}
      <section className="border-t border-stone-200 py-16 bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <p className="eyebrow text-[10px] text-stone-400 text-center mb-10">Trusted by</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {CLIENTS.map((client, i) => (
              <ScrollReveal key={client} delay={i * 0.04}>
                <span className="text-stone-300 font-medium text-sm tracking-wide hover:text-stone-500 transition-colors duration-200 cursor-default">
                  {client}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="section-gap bg-forest-950 grain-overlay">
        <div className="container-narrow relative z-10 text-center">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 text-[10px] mb-6">Partner With Us</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="display-heading text-white text-4xl lg:text-6xl mb-8 text-balance">
              Ready to source Ghana's finest cocoa and shea products?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 text-base leading-relaxed mb-12 max-w-lg mx-auto">
              Whether you are a global manufacturer, distributor, or investor — we'd like to talk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight size={15} />
              </Link>
              <Link to="/products" className="btn-outline text-white/60 border-white/20 hover:text-white hover:border-white/40">
                View Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
