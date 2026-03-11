'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryGridProps {
  title?: string
  images?: GalleryImage[]
}

export default function GalleryGrid({
  title = 'Club Gallery',
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', alt: 'Main court view' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', alt: 'Tournament evening lights' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Club lounge' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Coaching team' },
  ],
}: Partial<GalleryGridProps>) {
  const [active, setActive] = useState<GalleryImage | null>(null)

  return (
    <section className="bg-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">{title}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, idx) => (
            <button key={img.src + idx} onClick={() => setActive(img)} className="overflow-hidden rounded-xl">
              <Image src={img.src} alt={img.alt} width={600} height={400} className="h-40 w-full object-cover md:h-52" unoptimized />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)}>
          <Image src={active.src} alt={active.alt} width={1200} height={800} className="max-h-[85vh] w-auto rounded-xl object-contain" unoptimized />
        </div>
      )}
    </section>
  )
}
