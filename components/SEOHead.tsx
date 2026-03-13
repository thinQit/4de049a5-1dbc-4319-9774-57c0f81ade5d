"use client";

import type { Metadata } from 'next'

interface SEOHeadProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

export default function SEOHead({
  title = 'Anand Tennis Club | Wimbledon-Inspired Training & Events',
  description = 'Join Anand Tennis Club for elite coaching, monthly events, membership plans, and a modern Wimbledon-style tennis experience.',
  url = 'https://anandtennisclub.com',
  image = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576907/site-images/corporate/10142683.jpg',
}: Partial<SEOHeadProps>) {
  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Anand Tennis Club',
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }

  return <>{JSON.stringify(metadata)}</>
}
