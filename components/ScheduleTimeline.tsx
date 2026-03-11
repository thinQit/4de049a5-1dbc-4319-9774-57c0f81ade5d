'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ScheduleItem {
  id: string
  title: string
  datetime: string
  category: string
  tags: string[]
  href: string
}

interface ScheduleTimelineProps {
  title?: string
  items?: ScheduleItem[]
}

export default function ScheduleTimeline({
  title = 'Event Schedule',
  items = [
    { id: '1', title: 'Junior Open Qualifiers', datetime: '2026-02-10 08:00 IST', category: 'Tournament', tags: ['Junior', 'Singles'], href: '/events/1' },
    { id: '2', title: 'Women Doubles Night', datetime: '2026-02-14 18:30 IST', category: 'Community', tags: ['Doubles', 'Members'], href: '/events/2' },
    { id: '3', title: 'Coach Masterclass', datetime: '2026-02-20 16:00 IST', category: 'Training', tags: ['Skill', 'Serve'], href: '/events/3' },
  ],
}: Partial<ScheduleTimelineProps>) {
  const categories = ['All', ...Array.from(new Set(items.map((i) => i.category)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(
    () => (activeCategory === 'All' ? items : items.filter((i) => i.category === activeCategory)),
    [items, activeCategory]
  )

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'bg-emerald-700 hover:bg-emerald-800' : ''}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-xl border bg-card p-5">
              <p className="text-sm font-medium text-emerald-700">{item.datetime}</p>
              <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Button asChild className="mt-4 bg-[#FFD700] text-black hover:bg-[#e8c200]">
                <a href={item.href}>Register</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
