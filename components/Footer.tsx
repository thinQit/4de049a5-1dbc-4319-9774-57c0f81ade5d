"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  brandName?: string
  contactEmail?: string
  contactPhone?: string
  address?: string
  quickLinks?: FooterLink[]
  legalLinks?: FooterLink[]
}

export default function Footer({
  brandName = 'Anand Tennis club',
  contactEmail = 'hello@anandtennisclub.com',
  contactPhone = '+91 98765 43210',
  address = 'Anand Tennis Club, Centre Court Road, Bengaluru, India',
  quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Club Overview', href: '/club' },
    { label: 'Contact', href: '/contact' },
  ],
  legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Membership Policy', href: '/membership-policy' },
  ],
}: Partial<FooterProps>) {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-extrabold text-white">{brandName}</h3>
            <p className="mt-3 text-sm text-emerald-100">
              Wimbledon-inspired tennis culture with modern facilities, monthly events, and coaching
              for all levels.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{address}</li>
              <li>{contactPhone}</li>
              <li>{contactEmail}</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-emerald-800" />
        <p className="text-xs text-emerald-200">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
