"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  description?: string
}

export default function CTASection({
  title = 'Ready to Step Onto the Court?',
  description = 'Secure your membership or register for the next event in under 2 minutes.',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-gradient-to-r from-[#4f46e5] via-[#5B21B6] to-[#FF6B6B] py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6">
        <h2 className="font-syne text-3xl font-bold text-white md:text-5xl">{title}</h2>
        <p className="mt-3 text-slate-100">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-lg bg-white text-[#4f46e5] hover:bg-slate-100">
            <Link href="/membership-signup">Join Now</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-white text-white hover:bg-white/10">
            <Link href="/events">View Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
