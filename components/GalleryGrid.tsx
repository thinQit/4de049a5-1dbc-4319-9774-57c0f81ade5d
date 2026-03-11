'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'

export default function GalleryGrid() {
  const images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', caption: 'Championship atmosphere' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', caption: 'Center court action' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', caption: 'Coaching excellence' },
  ]
  const [active, setActive] = useState('')

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {images.map((img) => (
            <button key={img.src} onClick={() => setActive(img.src)} className="overflow-hidden rounded-xl border text-left">
              <Image src={img.src} alt={img.caption} width={800} height={600} className="h-56 w-full object-cover" unoptimized />
              <p className="p-3 text-sm">{img.caption}</p>
            </button>
          ))}
        </div>
        <Dialog open={!!active} onOpenChange={() => setActive('')}>
          {active ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <Image src={active} alt="Gallery preview" width={1200} height={800} className="max-h-[85vh] w-auto rounded-lg" unoptimized />
            </div>
          ) : null}
        </Dialog>
      </div>
    </section>
  )
}
