"use client";

import { Badge } from '@/components/ui/badge'
import { Select } from '@/components/ui/select'

interface EventCalendarProps {
  month?: string
  events?: { date: string; title: string; type: string }[]
}

export default function EventCalendar({
  month = 'January 2026',
  events = [
    { date: '03', title: 'Junior Open', type: 'Tournament' },
    { date: '12', title: 'Night Rally', type: 'Social' },
    { date: '22', title: 'Coach Masterclass', type: 'Workshop' },
  ],
}: Partial<EventCalendarProps>) {
  return (
    <section className="py-20">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">{month}</h3>
        <Select />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((event) => (
          <div key={event.date + event.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-3xl font-black text-[#FFD700]">{event.date}</div>
            <p className="mt-2 font-semibold text-white">{event.title}</p>
            <Badge className="mt-2 bg-[#5B21B6] text-white">{event.type}</Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
