"use client";

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SiteShellProps {
  children?: ReactNode
  className?: string
  withPattern?: boolean
}

export default function SiteShell({
  children = null,
  className = '',
  withPattern = true,
}: Partial<SiteShellProps>) {
  return (
    <div className="min-h-screen bg-[#0B2A1E] text-white">
      {withPattern ? (
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFD70033,_transparent_35%),radial-gradient(circle_at_80%_20%,_#5B21B633,_transparent_40%)]" />
        </div>
      ) : null}
      <main className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28', className)}>
        {children}
      </main>
    </div>
  )
}
