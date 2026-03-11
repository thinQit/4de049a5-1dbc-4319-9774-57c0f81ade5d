"use client";

import Link from 'next/link'
import { Facebook, Instagram, MapPin, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FooterProps {
  clubName?: string
}

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Club', href: '/club' },
  { label: 'Membership', href: '/membership' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export default function Footer({ clubName = 'Anand Tennis Club' }: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-[#081D15]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-white">{clubName}</h3>
          <p className="mt-3 text-sm text-white/70">Wimbledon-inspired tennis experiences in a modern, vibrant club setting.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#FFD700]">Visit Us</h4>
          <p className="mt-3 text-sm text-white/80">88 Centre Court Avenue</p>
          <p className="text-sm text-white/80">Open Daily: 6:00 AM - 10:00 PM</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4" /> Near Central Metro Line
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-[#FFD700]">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {QUICK_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#FFD700]">Newsletter</h4>
          <div className="mt-3 flex gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button className="bg-[#FFD700] text-[#0B2A1E] hover:bg-[#ffd700]/90">Join</Button>
          </div>
          <div className="mt-4 flex gap-3 text-white/80">
            <Facebook className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
