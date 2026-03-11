"use client";

import { Button } from '@/components/ui/button'

export default function MapSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-extrabold">Visit Anand Tennis Club</h2>
          <p className="mt-3 text-muted-foreground">48 Centre Court Lane, Anand, Gujarat</p>
          <p className="text-sm text-muted-foreground">Mon–Fri: 6:00 AM – 10:00 PM | Sat–Sun: 7:00 AM – 9:00 PM</p>
          <Button className="mt-6 bg-[#0f3d2e] hover:bg-[#15553f]">Get Directions</Button>
        </div>
        <iframe
          title="Anand Tennis Club Map"
          className="h-80 w-full rounded-xl border"
          src="https://maps.google.com/maps?q=Anand%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </section>
  )
}
