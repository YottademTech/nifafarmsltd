import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { IMAGES } from '../../lib/images'

interface LogoProps {
  className?: string
  imageClassName?: string
  link?: boolean
}

export default function Logo({ className, imageClassName, link = true }: LogoProps) {
  const image = (
    <img
      src={IMAGES.logo}
      alt="Nifa Farms Limited"
      className={clsx('h-10 lg:h-12 w-auto object-contain', imageClassName)}
      width={160}
      height={48}
    />
  )

  if (!link) {
    return <div className={clsx('inline-flex shrink-0', className)}>{image}</div>
  }

  return (
    <Link
      to="/"
      className={clsx('inline-flex shrink-0', className)}
      aria-label="Nifa Farms Limited – Home"
    >
      {image}
    </Link>
  )
}
