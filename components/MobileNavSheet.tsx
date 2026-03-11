'use client'

import { useState } from 'react'
import { Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import NavDropdown from '@/components/NavDropdown'
import { cn } from '@/lib/utils'

interface MobileNavSheetProps {
  triggerIcon?: string
  triggerClassName?: string
}

export default function MobileNavSheet({
  triggerIcon = 'Menu',
  triggerClassName = '',
}: Partial<MobileNavSheetProps>) {
  const [clubOpen, setClubOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={cn('rounded-lg p-2', triggerClassName)} aria-label='Open menu'>
          <Menu className='h-6 w-6' />
        </button>
      </SheetTrigger>
      <SheetContent side='right' className='w-[85%] border-none bg-[#0F4D2C] text-white'>
        <SheetHeader>
          <SheetTitle className='text-left text-white'>Club Navigation</SheetTitle>
        </SheetHeader>
        <div className='mt-6 space-y-2'>
          <Link href='/' className='block rounded-lg px-2 py-2 text-sm font-semibold'>Home</Link>
          <Link href='/events' className='block rounded-lg px-2 py-2 text-sm font-semibold'>Events</Link>
          <NavDropdown
            mobile
            label='Club'
            open={clubOpen}
            onToggle={() => setClubOpen(!clubOpen)}
            items={[
              { label: 'About Us', href: '/club' },
              { label: 'History', href: '/club#history' },
              { label: 'Facilities', href: '/club#facilities' },
            ]}
          />
          <NavDropdown
            mobile
            label='Membership'
            open={membershipOpen}
            onToggle={() => setMembershipOpen(!membershipOpen)}
            items={[
              { label: 'Plans', href: '/membership' },
              { label: 'Benefits', href: '/membership#benefits' },
              { label: 'Enquiry', href: '/contact#membership' },
            ]}
          />
          <Link href='/contact' className='block rounded-lg px-2 py-2 text-sm font-semibold'>Contact</Link>
        </div>
        <Button className='mt-6 w-full rounded-xl bg-white text-[#0F4D2C] hover:bg-white/90'>
          <Sparkles className='mr-2 h-4 w-4' />
          Join the Club
        </Button>
      </SheetContent>
    </Sheet>
  )
}
