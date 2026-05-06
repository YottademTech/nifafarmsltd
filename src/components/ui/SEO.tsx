import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.nifafarms.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`
const SITE_NAME = 'Nifa Farms Limited'

interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  noIndex?: boolean
}

export default function SEO({ title, description, path = '', ogImage = DEFAULT_OG_IMAGE, noIndex = false }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonical = `${BASE_URL}${path}`

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GH" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
