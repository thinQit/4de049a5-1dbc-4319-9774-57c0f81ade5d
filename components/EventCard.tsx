'use client'

import Link from 'next/link'
import { CalendarDays, Clock3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  date?: string
  time?: string
  title?: string
  description?: string
  tag?: string
  href?: string
}

export default function EventCard({
  date = '14 Jul 2026',
  time = '18:30',
  title = 'Evening Grass Court Open',
  description = 'A competitive mixed-level draw with post-match clubhouse reception.',
  tag = 'Tournament',
  href = '/events',
}: Partial<EventCardProps>) {
  return (
    <Card className='rounded-2xl'>
      <CardHeader>
        <Badge className='w-fit bg-[#DDF5E2] text-[#0F4D2C]'>{tag}</Badge>
        <CardTitle className='mt-3 text-xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2'><CalendarDays className='h-4 w-4' />{date}</div>
        <div className='flex items-center gap-2'><Clock3 className='h-4 w-4' />{time}</div>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant='outline' className='rounded-xl'>
          <Link href={href}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
