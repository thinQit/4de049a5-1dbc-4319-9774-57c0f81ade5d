'use client'

import { Dumbbell, Trophy, Building2, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HighlightsGrid() {
  const items = [
    {
      title: 'Coaching Excellence',
      icon: Dumbbell,
      points: ['Private & group lessons', 'Junior development pathway', 'Video-based technique analysis'],
    },
    {
      title: 'Signature Tournaments',
      icon: Trophy,
      points: ['Monthly member cups', 'Summer grass open', 'Weekend doubles ladder'],
    },
    {
      title: 'Premium Facilities',
      icon: Building2,
      points: ['Championship grass courts', 'Recovery lounge & gym', 'Elegant clubhouse dining'],
    },
  ]

  return (
    <section className='bg-white py-20 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Club Highlights</h2>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {items.map((item) => (
            <Card key={item.title} className='rounded-2xl border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-[#0F4D2C]'>
                  <item.icon className='h-5 w-5' />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                {item.points.map((point) => (
                  <div key={point} className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <CheckCircle2 className='mt-0.5 h-4 w-4 text-[#2C8B57]' />
                    <span>{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
