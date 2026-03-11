"use client";

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  title?: string
  date?: string
  type?: string
  price?: string
  registerHref?: string
}

export default function EventCard({
  title = 'Sunset Doubles Showdown',
  date = 'Feb 14, 2026',
  type = 'Tournament',
  price = '$25',
  registerHref = '/event-registration',
}: Partial<EventCardProps>) {
  return (
    <Card className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <Badge className="bg-[#5B21B6] text-white">{type}</Badge>
      <h4 className="mt-3 text-lg font-bold text-white">{title}</h4>
      <p className="mt-1 text-sm text-white/75">{date}</p>
      <p className="mt-3 text-[#FFD700] font-semibold">{price}</p>
      <Link href={registerHref}>
        <Button className="mt-4 w-full bg-[#FF6B6B]">Register</Button>
      </Link>
    </Card>
  )
}
