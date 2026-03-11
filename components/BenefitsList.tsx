'use client'

import { CheckCircle2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function BenefitsList() {
  const benefits = [
    'Priority court reservations up to 14 days ahead',
    'Discounted coaching and private lesson bundles',
    'Exclusive member tournaments and social events',
    'Guest invitations and family participation weekends',
  ]

  return (
    <section className='py-20 md:py-24' id='benefits'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Membership Benefits</h2>
        <div className='mt-6 space-y-3'>
          {benefits.map((b) => (
            <div key={b} className='flex items-start gap-2'>
              <CheckCircle2 className='mt-0.5 h-5 w-5 text-[#2C8B57]' />
              <p>{b}</p>
            </div>
          ))}
        </div>
        <Separator className='my-6' />
        <p className='text-sm text-muted-foreground'>Policy note: Membership renews monthly and may be changed with 30 days notice.</p>
      </div>
    </section>
  )
}
