import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/ui/SEO'
import { BOARD_MEMBERS, MANAGEMENT_ROLES, CORE_VALUES, COMPANY_INFO } from '../lib/constants'
import { IMAGES, GALLERY } from '../lib/images'
import FarmImage from '../components/ui/FarmImage'
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
      <section className="relative bg-forest-900 pt-36 pb-24 grain-overlay overflow-hidden">
        <div className="page-hero-bg">
          <img src={IMAGES.farmCrops} alt="" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/30 via-forest-900/50 to-forest-900/85" />
        </div>
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 mb-5">Who We Are</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display-heading text-white text-5xl sm:text-6xl lg:text-7xl max-w-2xl leading-[1.05]">
              A Ghanaian Company<br />
              <em className="not-italic text-forest-300">Built to Last.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 mt-6 text-base sm:text-lg max-w-lg leading-relaxed">
              Wholly owned and operated in Ghana — from the cocoa forest belt to international markets, Nifa Farms is redefining what agri-processing looks like from Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-0">
            <ScrollReveal y={24}>
              <FarmImage
                src={IMAGES.facilityBuilding}
                alt="Nifa Farms Limited facility in Offinso, Ashanti Region"
                className="aspect-[5/4]"
                loading="eager"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="eyebrow text-forest-600 mb-4">Our Home</p>
              <h2 className="display-heading text-forest-950 text-3xl sm:text-4xl lg:text-5xl mb-5">
                Offinso–Ahenkro,<br />Ashanti Region.
              </h2>
              <p className="text-stone-500 text-base leading-relaxed">
                From our base in Ghana's cocoa heartland, Nifa Farms operates farms, warehouses, and a haulage fleet — with a 32,000 MT processing facility on the horizon.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-100 mt-16">
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
                  <p className="eyebrow text-gold-500 mb-6">{item.label}</p>
                  <h3 className="font-display text-2xl text-forest-950 font-semibold mb-5 leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-stone-500 text-base leading-relaxed">{item.body}</p>
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
            <p className="eyebrow text-forest-600 mb-4">Core Values</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl sm:text-5xl lg:text-6xl mb-14">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group">
                  <div className="w-10 h-px bg-forest-600 mb-7 group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-2xl font-semibold text-forest-950 mb-4">{v.title}</h3>
                  <p className="text-stone-500 text-base leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
          <ScrollReveal>
            <p className="eyebrow text-forest-600 mb-4">Our Journey</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl sm:text-5xl lg:text-6xl mb-16">
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
                        <span className="text-xs sm:text-sm bg-gold-100 text-gold-600 px-2 py-0.5 font-medium tracking-wide ml-2 lg:ml-0 lg:absolute lg:-bottom-5 lg:right-6">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 text-base leading-relaxed flex-1 lg:py-1">{item.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
            </div>

            <ScrollReveal delay={0.12} y={30} className="hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <FarmImage
                  src={IMAGES.haulageTruck}
                  alt="Nifa Farms commodity haulage truck fleet in Ghana"
                  className="aspect-[4/3]"
                />
                <FarmImage
                  src={IMAGES.cassavaProcessing}
                  alt="Community cassava processing at Nifa Farms"
                  className="aspect-[16/10]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="section-gap-sm bg-stone-50">
        <div className="container-wide">
          <ScrollReveal>
            <p className="eyebrow text-forest-600 mb-4">Infrastructure</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl sm:text-5xl lg:text-6xl mb-14">
              Built for Scale.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {GALLERY.map((item, i) => (
              <ScrollReveal key={item.src} delay={i * 0.05}>
                <div className={`group overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                  <FarmImage
                    src={item.src}
                    alt={item.alt}
                    className={i === 0 ? 'aspect-square lg:aspect-auto lg:h-full min-h-[280px]' : 'aspect-[4/3]'}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-gap bg-forest-950 grain-overlay">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 mb-4">Governance</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
              Board of Directors
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/35 text-base mb-14 max-w-lg leading-relaxed">
              Guided by professionals with decades of combined experience across accountancy, law, finance, manufacturing, and commodity trading.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {BOARD_MEMBERS.map((member, i) => (
              <ScrollReveal key={`${member.name}-${i}`} delay={i * 0.07}>
                <div className="bg-forest-950/70 hover:bg-forest-900/50 transition-colors duration-300 h-full flex flex-col overflow-hidden group">
                  <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                    <span className="absolute top-4 right-4 eyebrow text-white/50 bg-forest-950/60 px-2.5 py-1 backdrop-blur-sm">
                      {member.experience}
                    </span>
                  </div>
                  <div className="p-8 lg:p-9 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-medium text-white mb-1">{member.name}</h3>
                    <p className="text-gold-400 text-sm font-medium tracking-wide mb-4">{member.role}</p>
                    <p className="text-white/35 text-base mb-5 leading-relaxed flex-1">{member.fields}</p>
                    <div className="divider-dark pt-5">
                      <div className="flex flex-wrap gap-2">
                        {member.qualifications.slice(0, 3).map((q) => (
                          <span
                            key={q}
                            className="text-xs sm:text-sm text-white/30 border border-white/10 px-2.5 py-1"
                          >
                            {q}
                          </span>
                        ))}
                      </div>
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
                <p className="eyebrow text-forest-600 mb-4">Management</p>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 className="display-heading text-forest-950 text-4xl mb-6">
                  Executive Team
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-stone-500 text-base leading-relaxed mb-8">
                  Our executive team brings deep expertise in operations, finance, production, sustainability, and human resources — collectively steering Nifa Farms toward its 2027 processing milestone.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <FarmImage
                  src={IMAGES.officeTeam}
                  alt="Nifa Farms team collaboration space"
                  className="aspect-[16/10] hidden lg:block"
                />
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 gap-0 border border-stone-100">
              {MANAGEMENT_ROLES.map((role, i) => (
                <ScrollReveal key={role} delay={i * 0.04}>
                  <div className={`px-6 py-4 flex items-center gap-4 ${
                    i < MANAGEMENT_ROLES.length - 1 ? 'border-b border-stone-100' : ''
                  } hover:bg-stone-100 transition-colors duration-200`}>
                    <span className="text-xs sm:text-sm text-stone-300 w-6 shrink-0 font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base text-stone-700 font-medium">{role}</span>
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
                <p className="eyebrow text-stone-400 mb-3">Company Solicitors</p>
                <p className="font-display text-xl text-forest-950 font-medium mb-2">
                  {COMPANY_INFO.solicitors.name}
                </p>
                <p className="text-stone-400 text-base">{COMPANY_INFO.solicitors.address}</p>
                <p className="text-stone-400 text-base mt-1">
                  {COMPANY_INFO.solicitors.phone} · {COMPANY_INFO.solicitors.email}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Link to="/contact" className="btn-primary shrink-0">
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
