'use client'

import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <footer className='bg-[#0B3A21] py-14 text-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-6'>
        <div>
          <h4 className='font-bold'>Wimbledon Grove Tennis Club</h4>
          <p className='mt-2 text-sm text-white/80'>18 Centre Court Lane, London</p>
          <p className='text-sm text-white/80'>Mon–Sun: 06:00 – 22:00</p>
        </div>
        <div>
          <h5 className='font-semibold'>Contact</h5>
          <p className='mt-2 text-sm text-white/80'>+44 20 7946 1234</p>
          <p className='text-sm text-white/80'>hello@wimbledongroveclub.com</p>
        </div>
        <div>
          <h5 className='font-semibold'>Legal</h5>
          <div className='mt-2 space-y-1 text-sm text-white/80'>
            <Link href='/privacy' className='block hover:text-white'>Privacy Policy</Link>
            <Link href='/terms' className='block hover:text-white'>Terms of Service</Link>
          </div>
        </div>
        <div>
          <h5 className='font-semibold'>Newsletter</h5>
          <div className='mt-3'><NewsletterForm /></div>
          <div className='mt-4 flex gap-3'>
            <Instagram className='h-5 w-5' />
            <Facebook className='h-5 w-5' />
            <Linkedin className='h-5 w-5' />
          </div>
        </div>
      </div>
    </footer>
  )
}
