'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface StatItem {
  label: string
  value: string
}

interface HeroSectionProps {
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  stats?: StatItem[]
  imageSrc?: string
  textureOverlay?: boolean
}

export default function HeroSection({
  title = 'Welcome to Anand Tennis club',
  subtitle = 'Experience Wimbledon-green courts, elite coaching, and high-energy club events all year.',
  primaryCtaLabel = 'Explore Events',
  primaryCtaHref = '/events',
  secondaryCtaLabel = 'Become a Member',
  secondaryCtaHref = '/membership',
  stats = [
    { label: 'Members', value: '1,200+' },
    { label: 'Monthly Events', value: '4' },
    { label: 'Courts', value: '12' },
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  textureOverlay = true,
}: Partial<HeroSectionProps>) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-20 md:py-28">
      <Image
        src={imageSrc}
        alt="Anand Tennis club hero"
        fill
        className="object-cover opacity-30"
        unoptimized
      />
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-900/70',
          textureOverlay && 'bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.18),transparent_30%)]'
        )}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-emerald-100">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-[#FFD700] text-emerald-950 hover:bg-[#e8c200]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 self-end">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-emerald-700 bg-emerald-900/70 p-4 text-center">
              <p className="text-2xl font-extrabold text-[#FFD700] md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-emerald-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
