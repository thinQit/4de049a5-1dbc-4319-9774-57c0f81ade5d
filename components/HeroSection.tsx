"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
  facts?: string[]
}

export default function HeroSection({
  headline = 'Welcome to Anand Tennis Club',
  subheadline = 'Wimbledon-inspired courts, elite coaching, and exciting events all year.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  facts = ['8 Clay Courts', 'Monthly Tournaments', 'All Skill Levels'],
}: Partial<HeroSectionProps>) {
  return (
    <section className="relative overflow-hidden bg-[#0f3d2e] py-20 text-white md:py-28">
      <Image src={imageSrc} alt="Anand Tennis Club Hero" fill className="object-cover opacity-30" unoptimized />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Badge className="bg-[#FFD700] text-[#0f3d2e]">Anand Tennis Club</Badge>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{headline}</h1>
        <p className="mt-4 max-w-2xl text-white/90">{subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="bg-[#FFD700] text-[#0f3d2e] hover:bg-[#ffd22e]">Book a Trial</Button>
          <Button variant="outline" className="border-white/60 text-white hover:bg-white/10">
            View Events
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {facts.map((fact) => (
            <Badge key={fact} variant="secondary" className="bg-white/15 text-white">
              {fact}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
