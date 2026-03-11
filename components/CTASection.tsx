'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className='bg-[#0F4D2C] py-16 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 md:flex-row md:items-center md:px-6'>
        <div>
          <h3 className='text-2xl font-bold'>Ready to elevate your game?</h3>
          <p className='text-white/80'>Join a club built for performance, tradition, and community.</p>
        </div>
        <div className='flex gap-3'>
          <Button asChild className='rounded-xl bg-white text-[#0F4D2C] hover:bg-white/90'><Link href='/membership'>Join the Club</Link></Button>
          <Button asChild variant='outline' className='rounded-xl border-white text-white hover:bg-white/10'><Link href='/contact'>Contact Us</Link></Button>
        </div>
      </div>
    </section>
  )
}
