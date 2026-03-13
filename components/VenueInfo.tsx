"use client";

import { MapPin, TrainFront, Clock3, Wifi, Car } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface VenueInfoProps {
  venueName?: string
  address?: string
  mapEmbedUrl?: string
}

export default function VenueInfo({
  venueName = 'Anand Tennis Club Central Courts',
  address = '88 Centre Court Lane, London',
  mapEmbedUrl = 'https://www.google.com/maps?q=wimbledon+london&output=embed',
}: Partial<VenueInfoProps>) {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <Card className="rounded-xl border-white/10 bg-white/5 p-6">
          <h2 className="font-syne text-3xl font-bold text-white">{venueName}</h2>
          <p className="mt-4 flex items-center gap-2 text-slate-300"><MapPin className="h-4 w-4 text-[#FFD700]" /> {address}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#38bdf8]" /> Mon-Sun: 6:00 AM - 10:00 PM</li>
            <li className="flex items-center gap-2"><TrainFront className="h-4 w-4 text-[#38bdf8]" /> 7 min walk from Wimbledon Station</li>
            <li className="flex items-center gap-2"><Wifi className="h-4 w-4 text-[#38bdf8]" /> High-speed clubhouse Wi-Fi</li>
            <li className="flex items-center gap-2"><Car className="h-4 w-4 text-[#38bdf8]" /> On-site parking for members</li>
          </ul>
        </Card>
        <iframe
          src={mapEmbedUrl}
          className="h-[360px] w-full rounded-xl border border-white/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
