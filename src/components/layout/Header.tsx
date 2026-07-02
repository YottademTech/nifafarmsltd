import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { useAppStore } from '../../store/useAppStore'
import { NAV_LINKS } from '../../lib/constants'
import Logo from '../ui/Logo'

export default function Header() {
  const { scrolled, setScrolled, mobileMenuOpen, setMobileMenuOpen } = useAppStore()
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [setScrolled])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname, setMobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          transparent
            ? 'bg-transparent'
            : 'bg-forest-900/95 backdrop-blur-sm border-b border-white/8',
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <NavLink
                  key={href}
                  to={href}
                  className={({ isActive }) => clsx(
                    'text-sm lg:text-base font-medium tracking-wide transition-all duration-200 relative py-1 group',
                    transparent
                      ? isActive ? 'text-white' : 'text-white/65 hover:text-white'
                      : isActive ? 'text-white' : 'text-white/55 hover:text-white',
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span className={clsx(
                        'absolute bottom-0 left-0 h-px bg-gold-400 transition-all duration-300',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                      )} />
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="ml-2 btn-primary px-5 py-2.5 tracking-[0.06em]"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                'lg:hidden p-2 -mr-2 transition-colors duration-200',
                transparent ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-white',
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-forest-950 flex flex-col"
          >
            <div className="container-wide flex items-center h-16">
              <Logo />
            </div>

            <nav className="flex-1 flex flex-col justify-center container-wide gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={href}
                    className="block py-4 font-display text-3xl sm:text-4xl font-medium text-white/80 hover:text-white transition-colors duration-200 border-b border-white/8"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </motion.div>
            </nav>

            <div className="container-wide pb-10">
              <p className="text-white/30 text-sm sm:text-base tracking-wider">+233 247 023 698</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
