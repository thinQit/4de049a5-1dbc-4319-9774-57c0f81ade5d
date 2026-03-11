"use client";

import { CalendarDays, Clock3, Users, IndianRupee } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  title?: string
  date?: string
  time?: string
  level?: string
  fee?: string
  capacity?: string
}

export default function EventCard({
  title = 'Weekend Doubles League',
  date = 'Sat, Apr 20',
  time = '7:00 AM – 10:00 AM',
  level = 'Intermediate',
  fee = '₹499',
  capacity = '24 spots',
}: Partial<EventCardProps>) {
  return (
    <Card className="rounded-xl border p-5">
      <Badge className="bg-[#0f3d2e] text-white">{level}</Badge>
      <h3 className="mt-3 text-lg font-bold">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{date}</p>
        <p className="flex items-center gap-2"><Clock3 className="h-4 w-4" />{time}</p>
        <p className="flex items-center gap-2"><IndianRupee className="h-4 w-4" />{fee}</p>
        <p className="flex items-center gap-2"><Users className="h-4 w-4" />{capacity}</p>
      </div>
      <Button className="mt-5 w-full bg-[#5B21B6] hover:bg-[#4a1ba0]">Register</Button>
    </Card>
  )
}
