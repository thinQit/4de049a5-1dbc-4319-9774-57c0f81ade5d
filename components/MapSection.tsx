"use client";

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface MapSectionProps {
  title?: string
  address?: string
  hours?: string[]
  amenities?: string[]
  mapEmbedUrl?: string
  fallbackImageSrc?: string
}

export default function MapSection({
  title = 'Visit Anand Tennis club',
  address = 'Centre Court Road, Bengaluru, Karnataka, India',
  hours = ['Mon-Fri: 6:00 AM - 10:00 PM', 'Sat-Sun: 6:00 AM - 11:00 PM'],
  amenities = ['12 Grass-Feel Courts', 'Pro Shop', 'Locker Rooms', 'Cafe & Lounge'],
  mapEmbedUrl = '',
  fallbackImageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<MapSectionProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{address}</p>
          <div className="mt-6">
            <h3 className="font-semibold">Hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {hours.map((h, i) => <li key={h + i}>{h}</li>)}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {amenities.map((a) => (
              <Badge key={a} className="bg-emerald-700">{a}</Badge>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border">
          {mapEmbedUrl ? (
            <iframe title="Club map" src={mapEmbedUrl} className="h-[360px] w-full" loading="lazy" />
          ) : (
            <Image src={fallbackImageSrc} alt="Map fallback" width={1200} height={800} className="h-[360px] w-full object-cover" unoptimized />
          )}
        </div>
      </div>
    </section>
  )
}
