import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { PRODUCTS, type ProductCategory } from '../lib/constants'

const FILTERS: { label: string; value: 'All' | ProductCategory }[] = [
  { label: 'All Products', value: 'All' },
  { label: 'Cocoa', value: 'Cocoa' },
  { label: 'Shea', value: 'Shea' },
  { label: 'Services', value: 'Services' },
]

export default function Products() {
  const [active, setActive] = useState<'All' | ProductCategory>('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <>
      {/* Page Hero */}
      <section className="bg-forest-950 pt-36 pb-20 grain-overlay">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 text-[10px] mb-5">Our Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display-heading text-white text-5xl lg:text-7xl max-w-2xl">
              Products &<br />Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 mt-6 text-base max-w-lg leading-relaxed">
              From raw bean to refined product — Nifa Farms delivers a full range of cocoa and shea derivatives alongside expert agricultural services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-gap bg-stone-50">
        <div className="container-wide">
          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-14">
              {FILTERS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActive(value)}
                  className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                    active === value
                      ? 'bg-forest-700 text-white'
                      : 'border border-stone-300 text-stone-500 hover:border-forest-600 hover:text-forest-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`bg-white h-full flex flex-col cursor-pointer group transition-colors duration-300 ${
                      expanded === product.id ? 'bg-forest-50' : 'hover:bg-stone-50'
                    }`}
                    onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                  >
                    {/* Color band */}
                    <div
                      className="h-1.5 w-full transition-all duration-300"
                      style={{ backgroundColor: product.color }}
                    />
                    <div className="p-8 lg:p-10 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-6">
                        <span className={`eyebrow text-[9px] ${
                          product.category === 'Cocoa'
                            ? 'text-amber-700'
                            : product.category === 'Shea'
                            ? 'text-forest-600'
                            : 'text-stone-400'
                        }`}>
                          {product.category}
                        </span>
                        <div
                          className="w-4 h-4 rounded-sm shrink-0"
                          style={{ backgroundColor: product.color }}
                        />
                      </div>

                      <h3 className="font-display text-xl font-semibold text-forest-950 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{product.description}</p>

                      <AnimatePresence>
                        {expanded === product.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 mt-5 border-t border-stone-100">
                              <p className="text-stone-500 text-sm leading-relaxed">{product.detail}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        className="flex items-center gap-1.5 mt-6 text-forest-600 text-xs font-medium group-hover:gap-2.5 transition-all duration-200"
                      >
                        {expanded === product.id ? 'Show less' : 'Learn more'}
                        <motion.span animate={{ rotate: expanded === product.id ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ArrowRight size={12} />
                        </motion.span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Processing capacity callout */}
      <section className="section-gap-sm bg-forest-700">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <ScrollReveal>
                <p className="eyebrow text-gold-300/70 text-[10px] mb-4">Upcoming</p>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 className="display-heading text-white text-3xl lg:text-4xl max-w-lg">
                  32,000 MT annual processing facility launching June 2027.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <Link to="/contact" className="shrink-0 btn-outline text-white border-white/30 hover:border-white">
                Express Interest
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
