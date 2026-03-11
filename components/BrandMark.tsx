"use client";

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandMarkProps {
  showMonogram?: boolean
  compact?: boolean
  className?: string
  href?: string
}

export default function BrandMark({
  showMonogram = true,
  compact = false,
  className = '',
  href = '/',
}: Partial<BrandMarkProps>) {
  const content = (
    <div className={cn('flex items-center gap-3', className)}>
      {showMonogram ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0f3d2e] text-[#FFD700] font-extrabold tracking-tight">
          ATC
        </div>
      ) : null}
      <div className="leading-tight">
        <p className={cn('font-extrabold text-white tracking-wide', compact ? 'text-sm' : 'text-lg')}>
          Anand Tennis Club
        </p>
        {!compact ? <p className="text-xs text-white/80">Wimbledon-inspired Performance & Community</p> : null}
      </div>
    </div>
  )

  if (!href) return content
  return <Link href={href}>{content}</Link>
}
