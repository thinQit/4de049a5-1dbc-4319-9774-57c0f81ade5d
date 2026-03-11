'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function PricingTiers() {
  const tiers = [
    { name: 'Club Access', price: '£89/mo', featured: false, features: ['Court booking access', '2 guest passes/month', 'Social leagues'] },
    { name: 'Performance', price: '£149/mo', featured: true, features: ['Everything in Club Access', 'Weekly coaching clinic', 'Priority event registration'] },
    { name: 'Elite', price: '£239/mo', featured: false, features: ['Everything in Performance', '1:1 coaching session/month', 'Recovery suite access'] },
  ]

  return (
    <section className='py-20 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Membership Tiers</h2>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {tiers.map((tier) => (
            <Card key={tier.name} className={cn('rounded-2xl', tier.featured ? 'border-[#2C8B57] shadow-lg' : '')}>
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <p className='text-3xl font-bold text-[#0F4D2C]'>{tier.price}</p>
              </CardHeader>
              <CardContent className='space-y-2 text-sm'>
                {tier.features.map((f) => (
                  <div key={f} className='flex items-center gap-2'><Check className='h-4 w-4 text-[#2C8B57]' />{f}</div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className={cn('w-full rounded-xl', tier.featured ? 'bg-[#0F4D2C] hover:bg-[#0c3f24]' : '')}>Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
