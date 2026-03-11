'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  navItems?: NavItem[]
  activePath?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'Anand Tennis Club',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Club Overview', href: '/club' },
    { label: 'Events', href: '/events' },
    { label: 'Membership', href: '/membership' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  activePath = '/',
  ctaLabel = 'Join Membership',
  ctaHref = '/membership',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/60 bg-emerald-900/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          {brandName}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activePath === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm font-semibold text-emerald-50 transition-colors hover:text-white',
                  isActive && 'text-white'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-2 left-0 h-0.5 w-full bg-[#FFD700] transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>
            )
          })}
          <Button asChild className="bg-[#FFD700] text-emerald-950 hover:bg-[#e8c200]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white hover:bg-emerald-800 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-emerald-800 bg-emerald-900 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-emerald-50 hover:bg-emerald-800',
                  activePath === item.href && 'bg-emerald-800 text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-[#FFD700] text-emerald-950 hover:bg-[#e8c200]">
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
