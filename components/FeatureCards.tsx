"use client";

import { Trophy, Dumbbell, Users, Sparkles, Shield, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface FeatureItem {
  icon?: string
  title: string
  description: string
}

interface FeatureCardsProps {
  title?: string
  items?: FeatureItem[]
}

const iconMap: Record<string, any> = {
  Trophy,
  Dumbbell,
  Users,
  Sparkles,
  Shield,
  Star,
}

export default function FeatureCards({
  title = 'Club Benefits & Facilities',
  items = [
    { icon: 'Trophy', title: 'Professional Coaching', description: 'Certified coaches for junior and advanced players.' },
    { icon: 'Dumbbell', title: 'Fitness Zone', description: 'Strength and conditioning to improve on-court performance.' },
    { icon: 'Users', title: 'Community Leagues', description: 'Monthly social and competitive events for members.' },
  ],
}: Partial<FeatureCardsProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon || ''] || Star
            return (
              <Card key={item.title + idx} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <Icon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
