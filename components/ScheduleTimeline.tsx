"use client";

import { Badge } from '@/components/ui/badge'

interface Item {
  time: string
  title: string
  detail: string
}

interface ScheduleTimelineProps {
  items?: Item[]
}

export default function ScheduleTimeline({
  items = [
    { time: '08:00', title: 'Warm-Up & Registration', detail: 'Court check-in and welcome briefing.' },
    { time: '09:00', title: 'Singles Qualifiers', detail: 'Fast-paced knockout qualifiers begin.' },
    { time: '12:30', title: 'Doubles Showcase', detail: 'Featured pairs compete on center court.' },
  ],
}: Partial<ScheduleTimelineProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-extrabold">Schedule Timeline</h2>
        <div className="mt-8 space-y-6">
          {items.map((item, i) => (
            <div key={item.time + item.title} className="relative rounded-xl border bg-white p-5">
              <Badge className="bg-[#0f3d2e] text-white">{item.time}</Badge>
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              {i < items.length - 1 ? <div className="absolute -bottom-6 left-7 h-6 w-px bg-border" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
