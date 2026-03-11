"use client";

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function PricingCards() {
  const plans = [
    { name: 'Starter', price: '₹1,499/mo', features: ['2 sessions/week', 'Court access'], popular: false },
    { name: 'Pro', price: '₹2,999/mo', features: ['Unlimited court booking', 'Coaching clinics'], popular: true },
    { name: 'Elite', price: '₹4,999/mo', features: ['Priority events', '1:1 coaching'], popular: false },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="rounded-xl border p-6">
            {plan.popular ? <Badge className="bg-[#FFD700] text-[#0f3d2e]">Most Popular</Badge> : null}
            <h3 className="mt-3 text-xl font-bold">{plan.name}</h3>
            <p className="mt-1 text-3xl font-extrabold text-[#5B21B6]">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {plan.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Button className="mt-6 w-full bg-[#0f3d2e] hover:bg-[#15553f]">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
