'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  targetDate?: string
  title?: string
}

export default function CountdownTimer({
  targetDate = '2026-12-01T10:00:00',
  title = 'Countdown to Anand Open Championship',
}: Partial<CountdownTimerProps>) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now()
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
      const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24))
      const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60))
      const seconds = Math.max(0, Math.floor((diff / 1000) % 60))
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-extrabold text-[#0f3d2e] md:text-5xl">{title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className={cn('rounded-xl border bg-white p-6 shadow-sm')}>
              <p className="text-4xl font-extrabold text-[#5B21B6] md:text-6xl">{String(item.value).padStart(2, '0')}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
