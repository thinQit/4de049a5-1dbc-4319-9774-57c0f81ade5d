"use client";

import type { Metadata } from 'next'

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  image?: string
}

export default function SEOHead({
  title = 'Anand Tennis Club | Wimbledon Green Experience',
  description = 'Anand Tennis Club offers modern courts, monthly events, memberships, and coaching inspired by Wimbledon standards.',
  canonicalUrl = 'https://anandtennisclub.com',
  image = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<SEOHeadProps>) {
  const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Anand Tennis Club',
      images: [{ url: image, width: 1600, height: 900 }],
      type: 'website',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(metadata),
      }}
    />
  )
}
