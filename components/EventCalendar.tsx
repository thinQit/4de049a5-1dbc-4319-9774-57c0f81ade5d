'use client'

import { useState } from 'react'
import { Select } from '@/components/ui/select'
import EventCard from '@/components/EventCard'

export default function EventCalendar() {
  const [filter] = useState('All')
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold">Event Calendar</h2>
          <Select>
            <option>{filter}</option>
          </Select>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EventCard />
          <EventCard title="Junior Skills Camp" level="Beginner" fee="₹799" />
          <EventCard title="Night Rally Challenge" level="Advanced" fee="₹999" />
        </div>
      </div>
    </section>
  )
}
