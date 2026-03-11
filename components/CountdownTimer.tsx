'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'

interface CountdownTimerProps {
  eventTitle?: string
  eventDateISO?: string
  location?: string
  reducedMotion?: boolean
}

export default function CountdownTimer({
  eventTitle = 'Grand Summer Tennis Showcase',
  eventDateISO = '2026-08-10T18:00:00+05:30',
  location = 'Centre Court, Anand Tennis club',
  reducedMotion = false,
}: Partial<CountdownTimerProps>) {
  const target = new Date(eventDateISO).getTime()
  const [timeLeft, setTimeLeft] = useState(target - Date.now())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const safe = Math.max(timeLeft, 0)
  const days = Math.floor(safe / (1000 * 60 * 60 * 24))
  const hours = Math.floor((safe / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((safe / (1000 * 60)) % 60)
  const seconds = Math.floor((safe / 1000) % 60)

  return (
    <section className="bg-[#0f172a] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <Badge className="bg-[#FFD700] text-black">IST Timezone</Badge>
        <h2 className="mt-4 text-3xl font-black md:text-5xl">{eventTitle}</h2>
        <p className="mt-2 text-slate-300">{location}</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className={'rounded-xl border border-slate-700 bg-slate-900 p-6 ' + (reducedMotion ? '' : 'transition-transform hover:-translate-y-1')}
            >
              <p className="text-4xl font-black text-[#FFD700] md:text-6xl">{String(item.value).padStart(2, '0')}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
