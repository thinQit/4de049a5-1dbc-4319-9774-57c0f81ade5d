'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BrandMark from '@/components/BrandMark'
import { cn } from '@/lib/utils'

interface NavbarProps {
  className?: string
  links?: { label: string; href: string }[]
}

export default function Navbar({
  className = '',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Club Info', href: '/club-overview' },
    { label: 'Membership', href: '/membership' },
    { label: 'Contact', href: '/contact' },
  ],
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b border-[#FFD700]/30 bg-[#0f3d2e] text-white', className)}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <BrandMark />
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/90 hover:text-[#FFD700]">
              {link.label}
            </Link>
          ))}
          <Button className="bg-[#FFD700] text-[#0f3d2e] hover:bg-[#ffd22e]">Join Now</Button>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="h-1 w-full bg-[#FFD700]" />
      {open ? (
        <div className="border-t border-white/10 bg-[#0f3d2e] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-white/90">
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 bg-[#FFD700] text-[#0f3d2e] hover:bg-[#ffd22e]">Join Now</Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
