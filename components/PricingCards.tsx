"use client";

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface PricingCardsProps {
  plans?: { name: string; price: string; features: string[]; featured?: boolean }[]
}

export default function PricingCards({
  plans = [
    { name: 'Starter', price: '$39/mo', features: ['2 court bookings/week', 'Community events'] },
    { name: 'Pro Member', price: '$79/mo', features: ['Unlimited bookings', 'Priority events', 'Coaching discounts'], featured: true },
    { name: 'Elite', price: '$129/mo', features: ['All Pro benefits', 'Guest passes', 'Private clinic credits'] },
  ],
}: Partial<PricingCardsProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={'rounded-2xl border p-6 ' + (plan.featured ? 'border-[#FFD700] bg-[#1A3A2C]' : 'border-white/10 bg-white/5')}>
            {plan.featured ? <Badge className="bg-[#FFD700] text-[#0B2A1E]">Most Popular</Badge> : null}
            <h3 className="mt-4 text-xl font-bold text-white">{plan.name}</h3>
            <p className="mt-2 text-3xl font-black text-[#FFD700]">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="h-4 w-4 text-[#10b981]" /> {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full rounded-xl bg-[#4f46e5]">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
