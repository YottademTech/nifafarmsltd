import ScrollReveal from '../components/ui/ScrollReveal'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Leaf, ShieldCheck, Building2 } from 'lucide-react'

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Health & Safety',
    sub: 'Zero incidents. Zero compromise.',
    body: 'We uphold a zero-incident policy and foster a culture of proactive risk management across every level of our operations. From field workers to processing staff, safety is non-negotiable.',
    points: [
      'Zero-incident target across all operations',
      'Regular safety audits and drills',
      'Mandatory PPE and safe work procedures',
      'Health programmes for all employees',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    sub: 'Global standards. Consistently delivered.',
    body: 'We adopt global best practices in every project. Before commencing production in 2027, Nifa Farms will hold certifications from all relevant regulatory bodies — ensuring our products meet the most exacting international standards.',
    points: [
      'ISO food safety certification (pre-production)',
      'COCOBOD compliance — Ghana cocoa regulations',
      'Consistent moisture, fat, and pH specifications',
      'Traceability from farm to finished product',
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental Responsibility',
    sub: 'Lighter footprint. Greater legacy.',
    body: 'Nifa Farms integrates environmentally sound practices across all activities. We continuously monitor our environmental footprint and implement measures that minimise negative impacts on Ghana\'s biodiversity and natural resources.',
    points: [
      'Sustainable cocoa farming — no deforestation',
      'Waste-by-product utilisation (shells, cake, residue)',
      'Responsible water use in processing operations',
      'Environmental impact monitoring programme',
    ],
  },
  {
    icon: Users,
    title: 'Community & Local Content',
    sub: 'Ghana first. Always.',
    body: 'We prioritise local personnel, goods, and services at every stage of our operations. We comply with Ghana\'s local content regulations and actively promote skill development, training, and employment opportunities.',
    points: [
      '122 employees including 21 women, 19 youth',
      'Minimum 20 employees with disabilities',
      'University attachment and internship programme',
      'Community infrastructure investment',
    ],
  },
]

const WORKFORCE = [
  { label: 'Total Employees', value: '122' },
  { label: 'Women', value: '21' },
  { label: 'Youth', value: '19' },
  { label: 'Persons with Disabilities', value: '15' },
]

export default function Sustainability() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-forest-800 pt-36 pb-24 grain-overlay">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <p className="eyebrow text-gold-400/70 text-[10px] mb-5">Our Commitments</p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display-heading text-white text-5xl lg:text-7xl max-w-2xl">
              Sustainability &<br />
              <em className="not-italic text-forest-200">Responsibility</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-white/40 mt-6 text-base max-w-lg leading-relaxed">
              At Nifa Farms, sustainability is not a policy document. It is embedded in every decision — from how we grow our cocoa to how we invest in our communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Commitment Overview */}
      <section className="section-gap bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <p className="eyebrow text-[10px] text-forest-600 mb-4">Our Approach</p>
              </ScrollReveal>
              <ScrollReveal delay={0.06}>
                <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl mb-6">
                  People, Planet,<br />Performance.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  Nifa Farms Limited recognises that long-term business success and positive social and environmental impact are inseparable. As we scale into large-scale cocoa and shea processing, we are committed to doing it right.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.13}>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Our sustainability framework spans four pillars: Health & Safety, Quality Assurance, Environmental Responsibility, and Community & Local Content. Each pillar has measurable targets and accountability structures embedded in our governance.
                </p>
              </ScrollReveal>
            </div>

            {/* Workforce Stats */}
            <ScrollReveal delay={0.1} y={30}>
              <div className="grid grid-cols-2 gap-px bg-stone-100">
                {WORKFORCE.map(({ label, value }) => (
                  <div key={label} className="bg-stone-50 p-8">
                    <p className="font-display text-4xl font-semibold text-forest-700 mb-2">{value}</p>
                    <p className="text-stone-400 text-xs tracking-wide uppercase">{label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-forest-700 p-8 mt-px">
                <Building2 size={20} className="text-forest-200 mb-4" />
                <p className="text-white font-display text-lg font-medium mb-2">
                  AfCFTA Ready
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  Positioned to serve 54 African nations under the African Continental Free Trade Area framework.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-gap bg-stone-50">
        <div className="container-wide">
          <ScrollReveal>
            <p className="eyebrow text-[10px] text-forest-600 mb-4">Four Pillars</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="display-heading text-forest-950 text-4xl lg:text-5xl mb-16">
              How We Operate
            </h2>
          </ScrollReveal>

          <div className="space-y-px bg-stone-200">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <ScrollReveal key={pillar.title} delay={i * 0.08}>
                  <div className="bg-white p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 bg-forest-50 flex items-center justify-center">
                          <Icon size={16} className="text-forest-700" />
                        </div>
                        <span className="eyebrow text-[9px] text-forest-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-forest-950 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gold-600 text-xs font-medium italic">{pillar.sub}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-stone-500 text-sm leading-relaxed mb-7">{pillar.body}</p>
                      <ul className="space-y-2.5">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-sm text-stone-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest-400 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap-sm bg-forest-950 grain-overlay">
        <div className="container-wide relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <ScrollReveal>
              <h2 className="display-heading text-white text-3xl lg:text-4xl max-w-xl">
                Interested in our sustainability standards and certifications?
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.08}>
            <Link to="/contact" className="shrink-0 btn-primary">
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
