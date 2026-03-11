"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BrandMark from '@/components/BrandMark'

interface FooterProps {
  className?: string
}

export default function Footer({ className = '' }: Partial<FooterProps>) {
  return (
    <footer className={'bg-[#0f3d2e] text-white ' + className}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <BrandMark href="/" />
          <p className="mt-4 max-w-md text-sm text-white/80">
            Anand Tennis Club brings Wimbledon-inspired training, events, and community competition to players of all levels.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#FFD700]">Visit Us</h4>
          <p className="mt-3 text-sm text-white/80">48 Centre Court Lane, Anand, Gujarat</p>
          <p className="text-sm text-white/80">Mon–Fri: 6:00 AM – 10:00 PM</p>
          <p className="text-sm text-white/80">Sat–Sun: 7:00 AM – 9:00 PM</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#FFD700]">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/events">Events</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="mt-4 space-y-2">
            <Input placeholder="Your email" />
            <Button className="w-full bg-[#FFD700] text-[#0f3d2e] hover:bg-[#ffd22e]">Join Newsletter</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Anand Tennis Club. All rights reserved.
      </div>
    </footer>
  )
}
