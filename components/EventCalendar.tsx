'use client'

import { useMemo, useState } from 'react'
import EventCard from '@/components/EventCard'
import { Input } from '@/components/ui/input'

interface EventItem {
  title: string
  date: string
  type: string
  level: string
  capacity: string
  href: string
}

interface EventCalendarProps {
  events?: EventItem[]
}

export default function EventCalendar({
  events = [
    { title: 'Sunrise Serve Clinic', date: '2026-07-03', type: 'Clinic', level: 'Beginner', capacity: '24 spots', href: '/event-registration-management' },
    { title: 'Weekend Ladder Challenge', date: '2026-07-09', type: 'Tournament', level: 'Intermediate', capacity: '16 spots', href: '/event-registration-management' },
    { title: 'Pro Baseline Masterclass', date: '2026-07-14', type: 'Masterclass', level: 'Advanced', capacity: '12 spots', href: '/event-registration-management' },
  ],
}: Partial<EventCalendarProps>) {
  const [filter, setFilter] = useState('')

  const filtered = useMemo(() => {
    const q = filter.toLowerCase()
    return events.filter((e) => e.title.toLowerCase().includes(q) || e.type.toLowerCase().includes(q) || e.level.toLowerCase().includes(q))
  }, [events, filter])

  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-syne text-3xl font-bold text-white md:text-5xl">Event Calendar</h2>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by event type or level"
          className="mt-6 max-w-md border-white/20 bg-white/5 text-white placeholder:text-slate-400"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
