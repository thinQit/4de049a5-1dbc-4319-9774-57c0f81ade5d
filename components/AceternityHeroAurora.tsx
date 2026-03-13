'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'

interface AceternityHeroAuroraProps {
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export default function AceternityHeroAurora({
  title = 'Play Bold. Train Elite. Compete at Anand Tennis Club.',
  subtitle = 'A modern Wimbledon-inspired tennis club experience with premium coaching, tournaments, and high-energy member events.',
  primaryCtaLabel = 'Explore Events',
  primaryCtaHref = '/events',
  secondaryCtaLabel = 'Become a Member',
  secondaryCtaHref = '/membership-signup',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="min-h-[82vh] bg-slate-950">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center md:px-6">
        <p className="mb-5 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-[#FFD700]">
          Monthly Events · Wimbledon Spirit
        </p>
        <h1 className="max-w-5xl font-syne text-4xl font-extrabold leading-tight text-white md:text-6xl">
          <TextGenerateEffect words={title} />
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">{subtitle}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-lg bg-[#4f46e5] px-7 py-6 text-base hover:bg-[#4338ca]">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white/30 bg-transparent px-7 py-6 text-base text-white hover:bg-white/10">
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </div>
      </section>
    </AuroraBackground>
  )
}
