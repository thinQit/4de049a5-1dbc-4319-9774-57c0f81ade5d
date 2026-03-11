"use client";

import Image from 'next/image'

interface GalleryGridProps {
  images?: { src: string; alt: string }[]
}

export default function GalleryGrid({
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', alt: 'Main court lights' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Club lounge' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Coaching staff' },
  ],
}: Partial<GalleryGridProps>) {
  return (
    <section className="py-20">
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((img) => (
          <div key={img.src} className="overflow-hidden rounded-2xl border border-white/10">
            <Image src={img.src} alt={img.alt} width={1600} height={900} className="h-64 w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
