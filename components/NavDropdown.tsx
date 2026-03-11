'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DropdownItem {
  label?: string
  href?: string
}

interface NavDropdownProps {
  label?: string
  items?: DropdownItem[]
  mobile?: boolean
  open?: boolean
  onToggle?: () => void
}

export default function NavDropdown({
  label = 'Menu',
  items = [],
  mobile = false,
  open = false,
  onToggle = () => {},
}: Partial<NavDropdownProps>) {
  if (mobile) {
    return (
      <div className='w-full'>
        <button
          type='button'
          onClick={onToggle}
          className='flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-semibold'
        >
          {label}
          <ChevronRight className={cn('h-4 w-4 transition-transform', open ? 'rotate-90' : '')} />
        </button>
        {open && (
          <div className='ml-3 mt-1 space-y-1 border-l border-white/20 pl-3'>
            {items.map((item, idx) => (
              <Link key={item.href + idx} href={item.href || '#'} className='block py-1 text-sm opacity-90 hover:opacity-100'>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='group relative'>
      <button type='button' className='flex items-center gap-1 text-sm font-semibold'>
        {label}
        <ChevronDown className='h-4 w-4' />
      </button>
      <div className='invisible absolute left-0 top-full mt-3 min-w-[220px] rounded-xl border border-white/10 bg-[#114f2e] p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100'>
        {items.map((item, idx) => (
          <Link
            key={item.href + idx}
            href={item.href || '#'}
            className='block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
