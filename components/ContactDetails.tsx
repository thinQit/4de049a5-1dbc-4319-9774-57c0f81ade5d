'use client'

import { MapPin, Phone, Mail, Clock3 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactDetails() {
  return (
    <section className='py-20 md:py-24'>
      <div className='mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6'>
        <Card>
          <CardContent className='space-y-4 p-6'>
            <div className='flex gap-2'><MapPin className='h-5 w-5 text-[#2C8B57]' />18 Centre Court Lane, London</div>
            <div className='flex gap-2'><Clock3 className='h-5 w-5 text-[#2C8B57]' />Mon–Sun: 06:00 – 22:00</div>
            <div className='flex gap-2'><Phone className='h-5 w-5 text-[#2C8B57]' />+44 20 7946 1234</div>
            <div className='flex gap-2'><Mail className='h-5 w-5 text-[#2C8B57]' />hello@wimbledongroveclub.com</div>
          </CardContent>
        </Card>
        <div className='rounded-2xl border bg-muted/30 p-6'>
          <p className='font-semibold text-[#0F4D2C]'>Map Placeholder</p>
          <p className='mt-2 text-sm text-muted-foreground'>Interactive map integration can be added later.</p>
        </div>
      </div>
    </section>
  )
}
