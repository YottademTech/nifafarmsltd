import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const SHOW_AFTER_PX = 420

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40 group"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-forest-950/95 text-gold-400 border border-gold-400/25 shadow-[0_8px_32px_rgba(12,31,16,0.35)] backdrop-blur-sm transition-all duration-300 group-hover:border-gold-400/50 group-hover:text-gold-300 group-hover:shadow-[0_12px_40px_rgba(12,31,16,0.45)] group-hover:-translate-y-0.5 group-active:scale-95">
            <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
