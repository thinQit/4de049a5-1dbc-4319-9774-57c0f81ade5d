'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface CountdownTimerProps {
  targetDate?: string
  timezoneLabel?: string
}

export default function CountdownTimer({
  targetDate = '2026-07-01T09:00:00Z',
  timezoneLabel = 'BST (UTC+1)',
}: Partial<CountdownTimerProps>) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const t = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now()
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
      const h = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24))
      const m = Math.max(0, Math.floor((diff / (1000 * 60)) % 60))
      const s = Math.max(0, Math.floor((diff / 1000) % 60))
      setTime({ d, h, m, s })
    }, 1000)
    return () => clearInterval(t)
  }, [targetDate])

  return (
    <section className="bg-slate-900 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="font-syne text-3xl font-bold text-white md:text-5xl">Countdown to Summer Open</h2>
        <p className="mt-3 text-sm uppercase tracking-wider text-slate-300">Timezone: {timezoneLabel}</p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Days', value: time.d },
            { label: 'Hours', value: time.h },
            { label: 'Minutes', value: time.m },
            { label: 'Seconds', value: time.s },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="font-syne text-4xl font-extrabold text-[#FFD700] md:text-6xl">{String(item.value).padStart(2, '0')}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10 rounded-lg bg-[#FF6B6B] px-7 py-6 text-base hover:bg-[#ef4444]">
          <Link href="/event-registration-management">Register Now</Link>
        </Button>
      </div>
    </section>
  )
}
