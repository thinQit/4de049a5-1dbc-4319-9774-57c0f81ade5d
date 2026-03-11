"use client";

import { Car, Train } from 'lucide-react'

interface VenueMapProps {
  address?: string
  mapUrl?: string
}

export default function VenueMap({
  address = '88 Centre Court Avenue, Anand City',
  mapUrl = 'https://maps.google.com/maps?q=wimbledon&t=&z=13&ie=UTF8&iwloc=&output=embed',
}: Partial<VenueMapProps>) {
  return (
    <section className="grid gap-6 py-20 md:grid-cols-2">
      <iframe title="Venue Map" src={mapUrl} className="h-80 w-full rounded-2xl border border-white/15" loading="lazy" />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">Venue Information</h3>
        <p className="mt-3 text-white/80">{address}</p>
        <p className="mt-2 text-sm text-white/70">Open Daily: 6:00 AM - 10:00 PM</p>
        <div className="mt-4 space-y-2 text-sm text-white/80">
          <div className="flex items-center gap-2"><Train className="h-4 w-4 text-[#FFD700]" /> Central Metro + 5 min walk</div>
          <div className="flex items-center gap-2"><Car className="h-4 w-4 text-[#FFD700]" /> Free on-site parking for members</div>
        </div>
      </div>
    </section>
  )
}
