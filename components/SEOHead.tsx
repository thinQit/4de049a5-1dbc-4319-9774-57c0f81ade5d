"use client";

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  imageUrl?: string
  siteName?: string
}

export default function SEOHead({
  title = 'Anand Tennis club',
  description = 'Anand Tennis club: Wimbledon-inspired tennis club with events, memberships, and coaching.',
  canonicalUrl = 'https://anandtennisclub.com',
  imageUrl = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  siteName = 'Anand Tennis club',
}: Partial<SEOHeadProps>) {
  return (
    <>
      <title>{title + ' | ' + siteName}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title + ' | ' + siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
    </>
  )
}
