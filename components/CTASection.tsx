"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready to Play at Anand Tennis club?',
  description = 'Join our vibrant Wimbledon-inspired community with tournaments, training, and elite facilities.',
  primaryLabel = 'Start Membership',
  primaryHref = '/membership',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: Partial<CTASectionProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-2xl border-2 border-[#FFD700]/70 bg-emerald-800 p-10 text-center text-white">
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-50">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-[#FFD700] text-emerald-950 hover:bg-[#e8c200]">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
