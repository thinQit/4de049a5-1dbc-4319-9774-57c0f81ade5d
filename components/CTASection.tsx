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
  title = 'Ready to Play at Anand Tennis Club?',
  description = 'Join memberships, register for events, and experience modern Wimbledon energy.',
  primaryLabel = 'Join Membership',
  primaryHref = '/membership-signup',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: Partial<CTASectionProps>) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#5B21B6] to-[#0B2A1E] p-8 text-center md:p-12">
      <h3 className="text-3xl font-black text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-white/85">{description}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={primaryHref}><Button className="bg-[#FFD700] text-[#0B2A1E]">{primaryLabel}</Button></Link>
        <Link href={secondaryHref}><Button variant="outline" className="border-white/30 text-white">{secondaryLabel}</Button></Link>
      </div>
    </section>
  )
}
