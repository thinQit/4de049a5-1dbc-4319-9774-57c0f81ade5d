'use client'

import Link from 'next/link'
import { Menu, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  links?: { label: string; href: string }[]
  className?: string
}

const DEFAULT_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Club', href: '/club' },
  { label: 'Membership', href: '/membership' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({
  logoText = 'Anand Tennis Club',
  links = DEFAULT_NAV_LINKS,
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-white/10 bg-[#0B2A1E]/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-white">
          <Trophy className="h-5 w-5 text-[#FFD700]" />
          <span>{logoText}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/90 hover:text-[#FFD700]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button className="rounded-xl bg-[#FFD700] px-5 py-2 font-semibold text-[#0B2A1E] hover:bg-[#ffd700]/90" asChild>
            <Link href="/membership">Join Now</Link>
          </Button>
          <button className="md:hidden">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
