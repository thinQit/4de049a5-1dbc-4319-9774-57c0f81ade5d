"use client";

import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterProps {
  clubName?: string
  email?: string
  phone?: string
  address?: string
}

export default function Footer({
  clubName = 'Anand Tennis Club',
  email = 'hello@anandtennisclub.com',
  phone = '+1 (415) 019-2046',
  address = '14 Centre Court Lane, Anand Park, CA 94016',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <h3 className="font-syne text-lg font-bold text-white">{clubName}</h3>
          <p className="text-sm text-slate-300">Elite coaching, events, and memberships for all levels.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-slate-300"><Mail className="h-4 w-4" /> {email}</p>
          <p className="flex items-center gap-2 text-sm text-slate-300"><Phone className="h-4 w-4" /> {phone}</p>
          <p className="flex items-start gap-2 text-sm text-slate-300"><MapPin className="mt-0.5 h-4 w-4" /> {address}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-white">Newsletter</h4>
          <p className="text-sm text-slate-300">Get monthly event drops and training updates.</p>
          <Button asChild className="rounded-lg bg-[#10b981] hover:bg-[#059669]">
            <Link href="/newsletter">Subscribe</Link>
          </Button>
          <div className="flex gap-3 text-slate-300">
            <a href="https://instagram.com/anandtennisclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/anandtennisclub" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@anandtennisclub" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
