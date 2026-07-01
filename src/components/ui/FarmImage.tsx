import { clsx } from 'clsx'

interface FarmImageProps {
  src: string
  alt: string
  className?: string
  overlay?: 'dark' | 'light' | false
  loading?: 'lazy' | 'eager'
}

export default function FarmImage({
  src,
  alt,
  className,
  overlay = false,
  loading = 'lazy',
}: FarmImageProps) {
  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-forest-950/10" />
      )}
      {overlay === 'light' && (
        <div className="absolute inset-0 bg-white/10" />
      )}
    </div>
  )
}
