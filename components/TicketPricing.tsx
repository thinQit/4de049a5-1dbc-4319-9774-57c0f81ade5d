"use client";

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Tier {
  name: string
  price: string
  badge: string
  features: string[]
  href: string
}

interface TicketPricingProps {
  tiers?: Tier[]
}

export default function TicketPricing({
  tiers = [
    { name: 'Starter', price: '$49/mo', badge: 'Popular', features: ['2 group sessions/week', 'Club court access', 'Monthly sparring'], href: '/membership-signup' },
    { name: 'Performance', price: '$99/mo', badge: 'Best Value', features: ['4 sessions/week', 'Video review', 'Priority event entry'], href: '/membership-signup' },
    { name: 'Elite', price: '$179/mo', badge: 'Pro Track', features: ['Daily coaching', '1:1 strategy session', 'Tournament concierge'], href: '/membership-signup' },
  ],
}: Partial<TicketPricingProps>) {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-10 text-center font-syne text-3xl font-bold text-white md:text-5xl">Membership Pricing</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="rounded-xl border-white/10 bg-white/5 p-6">
              <p className="inline-flex rounded-full border border-[#FFD700]/50 bg-[#FFD700]/10 px-3 py-1 text-xs text-[#FFD700]">{tier.badge}</p>
              <h3 className="mt-4 font-syne text-2xl font-bold text-white">{tier.name}</h3>
              <p className="mt-1 text-3xl font-extrabold text-[#38bdf8]">{tier.price}</p>
              <ul className="mt-5 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-[#10b981]" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full rounded-lg bg-[#4f46e5] hover:bg-[#4338ca]">
                <Link href={tier.href}>Select Plan</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
