'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Vortex } from '@/components/ui/backgrounds/vortex'

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
  highlights?: string[]
  withPattern?: boolean
}

export default function HeroSection({
  headline = 'Welcome to Anand Tennis Club',
  subheadline = 'Wimbledon-green energy, world-class courts, and immersive events every month.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  highlights = ['Elite Coaching', 'Championship Courts', 'Monthly Signature Events'],
  withPattern = true,
}: Partial<HeroSectionProps>) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#102D21] p-8 md:p-12">
      {withPattern ? <Vortex className="absolute inset-0 -z-10 opacity-30" /> : null}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <Badge className="bg-[#FFD700] text-[#0B2A1E]">Modern Wimbledon Style</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">{headline}</h1>
          <p className="mt-4 text-white/80">{subheadline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/membership-signup"><Button className="rounded-xl bg-[#4f46e5]">Become a Member</Button></Link>
            <Link href="/event-calendar"><Button variant="outline" className="rounded-xl border-white/30 text-white">Explore Events</Button></Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Badge key={item} variant="secondary" className="bg-white/10 text-white">{item}</Badge>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image src={imageSrc} alt="Anand Tennis Club Hero" width={1600} height={900} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
