"use client";

import Link from 'next/link'
import { CalendarDays, Users, Award, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface EventCardProps {
  title?: string
  date?: string
  type?: string
  level?: string
  capacity?: string
  href?: string
}

export default function EventCard({
  title = 'Club Event',
  date = '2026-07-01',
  type = 'Clinic',
  level = 'All Levels',
  capacity = '20 spots',
  href = '/event-registration-management',
}: Partial<EventCardProps>) {
  return (
    <Card className="rounded-xl border-white/10 bg-white/5 p-5">
      <h3 className="font-syne text-xl font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-slate-300">
        <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#FFD700]" /> {date}</p>
        <p className="flex items-center gap-2"><Tag className="h-4 w-4 text-[#38bdf8]" /> {type}</p>
        <p className="flex items-center gap-2"><Award className="h-4 w-4 text-[#38bdf8]" /> {level}</p>
        <p className="flex items-center gap-2"><Users className="h-4 w-4 text-[#38bdf8]" /> {capacity}</p>
      </div>
      <Button asChild className="mt-5 w-full rounded-lg bg-[#10b981] hover:bg-[#059669]">
        <Link href={href}>Register</Link>
      </Button>
    </Card>
  )
}
