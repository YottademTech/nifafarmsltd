import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/ui/SEO'
import { BOARD_MEMBERS, MANAGEMENT_ROLES, CORE_VALUES, COMPANY_INFO } from '../lib/constants'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const TIMELINE = [
  { year: '2018', event: 'Nifa Farms established as a poultry farm in Offinso–Ahenkro, Ashanti Region.' },
  { year: '2019', event: 'Pivoted into commodity aggregation — sourcing maize, soybeans, shea nuts, and cashew for off-takers.' },
  { year: '2021', event: 'Launched commodity haulage division with initial fleet of trucks. Secured first major off-take partnerships.' },
  { year: '2022', event: 'Acquired 1,200 hectares of cocoa farmland across Ghana. Established partnership with Denero Group of Companies.' },
  { year: '2023', event: 'Fleet expanded to 21 heavy-duty trucks. Client base grew to 9 major companies including GCX, Fortune Rock, and GAPFA.' },
  { year: '2025', event: 'Applied for all necessary regulatory licences ahead of processing facility commissioning.' },
  { year: '2027', event: 'Commissioning of 32,000 MT annual capacity cocoa and shea nuts processing facility.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Nifa Farms Limited — a wholly Ghanaian company founded in 2018 in Offinso–Ahenkro, Ashanti Region. Our story, board of directors, management team, core values, and company timeline."
        path="/about"
      />
      {/* Page Hero */}
      <section className="bg-forest-900 pt-36 pb-24 grain-overlay">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 text-[10px] mb-5">Who We Are</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display-heading text-white text-5xl lg:text-7xl max-w-2xl leading-[1.05]">
              A Ghanaian Company<br />
              <em className="not-italic text-forest-300">Built to Last.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 mt-6 text-base max-w-lg leading-relaxed">
              Wholly owned and operated in Ghana — from the cocoa forest belt to international markets, Nifa Farms is redefining what agri-processing looks like from Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-100">
            {[
              {
                label: 'Mission',
                heading: 'Trusted Supply. Exceptional Service.',
                body: 'We are committed to delivering high-quality, reliable, and cost-effective supply solutions. Through exceptional service, sustainable sourcing, and innovative logistics, we strive to be the trusted partner our clients can depend on.',
              },
              {
                label: 'Vision',
                heading: 'The Most Trusted Global Brand.',
                body: 'To become the most trusted global brand in the cocoa and shea nuts sector — a responsible global citizen compliant with all regulatory standards, building lasting relationships with customers worldwide.',
              },
              {
                label: 'Partnership',
                heading: 'Long-Term Relationships.',
                body: 'Our mission is to build long-term relationships by consistently exceeding expectations with integrity, efficiency, and excellence. We measure success by the longevity of our partnerships.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="bg-white p-10 lg:p-12 h-full">
                  <p className="eyebrow text-[9px] text-gold-500 mb-6">{item.label}</p>
                  <h3 className="font-display text-2xl text-forest-950 font-semibold mb-5 leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-gap-sm bg-stone-50">
        <div className="container-wide">
          <ScrollReveal>
            <p className="eyebrow text-[10px] text-forest-600 mb-4">Core Values</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl mb-14">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group">
                  <div className="w-10 h-px bg-forest-600 mb-7 group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-2xl font-semibold text-forest-950 mb-4">{v.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <p className="eyebrow text-[10px] text-forest-600 mb-4">Our Journey</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl mb-16">
              From 2018 to 2027
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-stone-100 hidden lg:block" />

            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.06}>
                  <div className={`flex flex-col lg:flex-row gap-6 lg:gap-14 py-8 ${
                    i < TIMELINE.length - 1 ? 'border-b border-stone-100' : ''
                  } ${item.year === '2027' ? 'opacity-70' : ''}`}>
                    <div className="lg:w-36 shrink-0 flex items-start gap-4 lg:gap-0 lg:justify-end lg:pr-12 relative">
                      <span className="font-display font-semibold text-forest-700 text-lg">{item.year}</span>
                      {item.year === '2027' && (
                        <span className="text-[9px] bg-gold-100 text-gold-600 px-2 py-0.5 font-medium tracking-wide ml-2 lg:ml-0 lg:absolute lg:-bottom-5 lg:right-6">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed flex-1 lg:py-1">{item.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-gap bg-forest-950 grain-overlay">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 text-[10px] mb-4">Governance</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-white text-4xl lg:text-5xl mb-4">
              Board of Directors
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/35 text-sm mb-14 max-w-lg leading-relaxed">
              Guided by professionals with decades of combined experience across accountancy, law, finance, manufacturing, and commodity trading.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {BOARD_MEMBERS.map((member, i) => (
              <ScrollReveal key={`${member.name}-${i}`} delay={i * 0.07}>
                <div className="bg-forest-950/70 p-8 lg:p-10 hover:bg-forest-900/50 transition-colors duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="font-display text-lg font-medium text-white mb-1">{member.name}</h3>
                      <p className="text-gold-400 text-xs font-medium tracking-wide">{member.role}</p>
                    </div>
                    <span className="eyebrow text-[9px] text-white/30 shrink-0 ml-4">
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-white/35 text-sm mb-5 leading-relaxed">{member.fields}</p>
                  <div className="divider-dark pt-5 mt-5">
                    <div className="flex flex-wrap gap-2">
                      {member.qualifications.slice(0, 3).map((q) => (
                        <span
                          key={q}
                          className="text-[10px] text-white/30 border border-white/10 px-2.5 py-1"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-gap-sm bg-stone-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <p className="eyebrow text-[10px] text-forest-600 mb-4">Management</p>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 className="display-heading text-forest-950 text-4xl mb-6">
                  Executive Team
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Our executive team brings deep expertise in operations, finance, production, sustainability, and human resources — collectively steering Nifa Farms toward its 2027 processing milestone.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-0 border border-stone-100">
              {MANAGEMENT_ROLES.map((role, i) => (
                <ScrollReveal key={role} delay={i * 0.04}>
                  <div className={`px-6 py-4 flex items-center gap-4 ${
                    i < MANAGEMENT_ROLES.length - 1 ? 'border-b border-stone-100' : ''
                  } hover:bg-stone-100 transition-colors duration-200`}>
                    <span className="text-[9px] text-stone-300 w-5 shrink-0 font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-stone-700 font-medium">{role}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solicitors + CTA */}
      <section className="section-gap-sm bg-white border-t border-stone-100">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <ScrollReveal>
              <div>
                <p className="eyebrow text-[10px] text-stone-400 mb-3">Company Solicitors</p>
                <p className="font-display text-xl text-forest-950 font-medium mb-2">
                  {COMPANY_INFO.solicitors.name}
                </p>
                <p className="text-stone-400 text-sm">{COMPANY_INFO.solicitors.address}</p>
                <p className="text-stone-400 text-sm mt-1">
                  {COMPANY_INFO.solicitors.phone} · {COMPANY_INFO.solicitors.email}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Link to="/contact" className="btn-primary text-xs shrink-0">
                Contact the Team
                <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
