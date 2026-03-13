"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Sponsor {
  name: string
  logo: string
  tier: string
}

interface SponsorLogosProps {
  sponsors?: Sponsor[]
}

export default function SponsorLogos({
  sponsors = [
    {
      name: 'Baseline Sports Physio',
      logo: '/images/sponsors/baseline-sports-physio.png',
      tier: 'Gold Partner'
    },
    {
      name: 'GreenCourt Resurfacing',
      logo: '/images/sponsors/greencourt-resurfacing.png',
      tier: 'Court Partner'
    },
    {
      name: 'Ace Hydration Co.',
      logo: '/images/sponsors/ace-hydration-co.png',
      tier: 'Silver Partner'
    },
    {
      name: 'StringLab Pro Shop',
      logo: '/images/sponsors/stringlab-pro-shop.png',
      tier: 'Equipment Partner'
    },
    {
      name: 'Anand Park Café',
      logo: '/images/sponsors/anand-park-cafe.png',
      tier: 'Community Partner'
    },
  ],
}: Partial<SponsorLogosProps>) {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center font-syne text-3xl font-bold text-white md:text-5xl">Our Sponsors</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center flex flex-col items-center">
              <Image
                src={s.logo}
                alt={s.name}
                width={140}
                height={72}
                className="mx-auto h-16 w-auto object-contain"
                unoptimized
              />
              <p className="mt-3 text-sm font-medium text-white">{s.name}</p>
              <p className="text-xs text-slate-300">{s.tier}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="rounded-lg bg-[#FF6B6B] hover:bg-[#ef4444]">
            <Link href="/contact?topic=sponsorship">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
