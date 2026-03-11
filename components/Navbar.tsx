'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import NavDropdown from '@/components/NavDropdown'
import MobileNavSheet from '@/components/MobileNavSheet'

interface NavbarProps {
  logoText?: string
  sticky?: boolean
  darkOnGreen?: boolean
}

export default function Navbar({
  logoText = 'Wimbledon Grove Tennis Club',
  sticky = true,
  darkOnGreen = true,
}: Partial<NavbarProps>) {
  return (
    <header
      className={cn(
        'z-50 w-full border-b border-white/10',
        sticky ? 'sticky top-0' : 'relative',
        darkOnGreen ? 'bg-[#0F4D2C] text-white' : 'bg-white text-[#0F4D2C]'
      )}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
        <Link href='/' className='flex items-center gap-3'>
          <Image src='https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' alt='Club crest' width={40} height={40} className='rounded-full' />
          <span className='text-sm font-bold tracking-wide md:text-base'>{logoText}</span>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          <Link href='/' className='text-sm font-semibold hover:opacity-80'>Home</Link>
          <Link href='/events' className='text-sm font-semibold hover:opacity-80'>Events</Link>
          <NavDropdown
            label='Club'
            items={[
              { label: 'About Us', href: '/club' },
              { label: 'History', href: '/club#history' },
              { label: 'Facilities', href: '/club#facilities' },
            ]}
          />
          <NavDropdown
            label='Membership'
            items={[
              { label: 'Plans', href: '/membership' },
              { label: 'Benefits', href: '/membership#benefits' },
              { label: 'Enquiry', href: '/contact#membership' },
            ]}
          />
          <Link href='/contact' className='text-sm font-semibold hover:opacity-80'>Contact</Link>
        </nav>

        <div className='hidden md:block'>
          <Button className='rounded-xl bg-white text-[#0F4D2C] hover:bg-white/90'>Join the Club</Button>
        </div>

        <div className='md:hidden'>
          <MobileNavSheet
            triggerIcon='Menu'
            triggerClassName={cn(darkOnGreen ? 'text-white' : 'text-[#0F4D2C]')}
          />
        </div>
      </div>
    </header>
  )
}
