import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { NAV_LINKS, COMPANY_INFO, PRODUCTS } from '../../lib/constants'
import Logo from '../ui/Logo'

const PRODUCT_LINKS = PRODUCTS.filter(p => p.category !== 'Services').slice(0, 6)

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="container-wide pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" imageClassName="h-14 lg:h-16" />
            <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-xs">
              Ghana's premier cocoa and shea nuts processing enterprise. From farm to global market.
            </p>
            <p className="text-gold-500 text-sm sm:text-base tracking-[0.12em] uppercase mt-6 font-medium">
              Est. 2018 · Ashanti Region, Ghana
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Company</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-base text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Products</p>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products"
                    className="text-base text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-base text-white/55 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-gold-500" />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-base text-white/55 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-gold-500" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-base text-white/55">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500" />
                  <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm sm:text-base">
            © {new Date().getFullYear()} Nifa Farms Limited. All rights reserved.
          </p>
          <p className="text-white/20 text-sm sm:text-base">
            Offinso–Ahenkro · Ashanti Region · Ghana
          </p>
        </div>
      </div>
    </footer>
  )
}
