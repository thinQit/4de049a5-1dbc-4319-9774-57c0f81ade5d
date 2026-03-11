'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
}

export default function HeroSection({
  headline = 'Play with Precision. Compete with Pride.',
  subheadline = 'A premium Wimbledon-inspired tennis club for members who value elite coaching, performance courts, and a vibrant year-round calendar.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<HeroSectionProps>) {
  return (
    <section className='bg-[#0F4D2C] text-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:items-center md:px-6 md:py-28'>
        <div>
          <Badge className='mb-4 bg-[#8BCB91] text-[#0F4D2C]'>Established 1924</Badge>
          <h1 className='text-4xl font-bold leading-tight md:text-6xl'>{headline}</h1>
          <p className='mt-4 max-w-xl text-white/85'>{subheadline}</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button asChild className='rounded-xl bg-white text-[#0F4D2C] hover:bg-white/90'>
              <Link href='/membership'>Join the Club</Link>
            </Button>
            <Button asChild variant='outline' className='rounded-xl border-white text-white hover:bg-white/10'>
              <Link href='/events'>View Events</Link>
            </Button>
          </div>
          <div className='mt-8 flex flex-wrap gap-2'>
            <Badge variant='secondary'>12 Grass Courts</Badge>
            <Badge variant='secondary'>ATP-Certified Coaches</Badge>
            <Badge variant='secondary'>Monthly Championships</Badge>
          </div>
        </div>
        <div className='relative overflow-hidden rounded-2xl border border-white/10'>
          <Image src={imageSrc} alt='Tennis hero' width={1600} height={900} unoptimized className='h-full w-full object-cover' />
        </div>
      </div>
    </section>
  )
}
