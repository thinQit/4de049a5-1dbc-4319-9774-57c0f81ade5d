"use client";

import { Card } from '@/components/ui/card'

interface TimelineItem {
  week: string
  title: string
  details: string
}

interface ScheduleTimelineProps {
  items?: TimelineItem[]
}

export default function ScheduleTimeline({
  items = [
    { week: 'Week 1', title: 'Foundations Camp', details: 'Baseline form correction, serve rhythm drills, and fitness testing.' },
    { week: 'Week 2', title: 'Match Simulation', details: 'Pressure tie-break scenarios and tactical adaptation sessions.' },
    { week: 'Week 3', title: 'Tournament Week', details: 'Singles and doubles ladder with coaching review.' },
    { week: 'Week 4', title: 'Recovery + Review', details: 'Mobility labs, analytics summary, and progression planning.' },
  ],
}: Partial<ScheduleTimelineProps>) {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mb-12 text-center font-syne text-3xl font-bold text-white md:text-5xl">Training Timeline</h2>
        <div className="relative space-y-6">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#4f46e5] via-[#10b981] to-transparent md:left-1/2" />
          {items.map((item, idx) => (
            <div key={item.week} className="relative md:grid md:grid-cols-2">
              <div className="absolute left-2 top-6 h-4 w-4 rounded-full bg-[#FFD700] md:left-[calc(50%-0.5rem)]" />
              <Card className="ml-10 rounded-xl border-white/10 bg-white/5 p-5 md:ml-0 md:mr-6">
                <p className="text-xs uppercase tracking-widest text-[#FFD700]">{item.week}</p>
                <h3 className="mt-1 font-syne text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.details}</p>
              </Card>
              <div className={idx % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:col-start-1 md:row-start-1'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
