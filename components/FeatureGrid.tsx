"use client";

import { Trophy, Users, Calendar, Shield, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeatureGridProps {
  features?: Feature[]
}

const iconMap: Record<string, any> = { Trophy, Users, Calendar, Shield, Sparkles }

export default function FeatureGrid({
  features = [
    { title: 'Elite Coaching', description: 'Certified coaches for juniors and adults.', icon: 'Trophy' },
    { title: 'Community Events', description: 'Monthly social leagues and tournaments.', icon: 'Users' },
    { title: 'Smart Scheduling', description: 'Easy booking and calendar visibility.', icon: 'Calendar' },
    { title: 'Premium Courts', description: 'Well-maintained Wimbledon-style surfaces.', icon: 'Shield' },
  ],
}: Partial<FeatureGridProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <Card key={feature.title} className="rounded-xl border p-6">
                <Icon className="h-6 w-6 text-[#0f3d2e]" />
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
