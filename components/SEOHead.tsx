"use client";

import { Metadata } from 'next'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SEOHead({
  title = 'Wimbledon Grove Tennis Club',
  description = 'Premium Wimbledon-inspired tennis club with elite coaching, events, and membership plans.',
  image = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  url = 'https://wimbledongroveclub.com',
}: Partial<SEOHeadProps>): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1600, height: 900, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
