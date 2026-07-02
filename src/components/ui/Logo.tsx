import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { IMAGES } from '../../lib/images'

interface LogoProps {
  className?: string
  imageClassName?: string
  link?: boolean
  showText?: boolean
}

export default function Logo({ className, imageClassName, link = true, showText = false }: LogoProps) {
  const image = (
    <img
      src={IMAGES.logo}
      alt={showText ? '' : 'Nifa Farms Limited'}
      aria-hidden={showText || undefined}
      className={clsx('h-10 lg:h-12 w-auto object-contain shrink-0', imageClassName)}
      width={160}
      height={48}
    />
  )

  const content = showText ? (
    <>
      {image}
      <div className="flex flex-col leading-none min-w-0">
        <span className="font-display font-semibold tracking-wide text-white text-base sm:text-lg lg:text-xl truncate">
          NIFA FARMS
        </span>
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gold-400/70 mt-0.5">
          Limited
        </span>
      </div>
    </>
  ) : (
    image
  )

  const layoutClass = showText ? 'inline-flex items-center gap-2.5 sm:gap-3 min-w-0' : 'inline-flex shrink-0'

  if (!link) {
    return <div className={clsx(layoutClass, className)}>{content}</div>
  }

  return (
    <Link
      to="/"
      className={clsx(layoutClass, 'shrink-0', className)}
      aria-label="Nifa Farms Limited – Home"
    >
      {content}
    </Link>
  )
}
