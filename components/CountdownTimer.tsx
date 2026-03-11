'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate?: string
  label?: string
}

export default function CountdownTimer({
  targetDate = '2026-01-15T09:00:00',
  label = 'Next Featured Event Starts In',
}: Partial<CountdownTimerProps>) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(new Date(targetDate).getTime() - Date.now(), 0)
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <section className="py-20 text-center">
      <p className="mb-8 text-sm uppercase tracking-[0.2em] text-[#FFD700]">{label}</p>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { key: 'Days', value: time.d },
          { key: 'Hours', value: time.h },
          { key: 'Minutes', value: time.m },
          { key: 'Seconds', value: time.s },
        ].map((item) => (
          <div key={item.key} className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <div className="text-5xl font-black text-white md:text-6xl">{String(item.value).padStart(2, '0')}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-[#FFD700]">{item.key}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
