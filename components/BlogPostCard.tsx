"use client";

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface BlogPostCardProps {
  title?: string
  excerpt?: string
  author?: string
  date?: string
  category?: string
}

export default function BlogPostCard({
  title = 'How Anand Tennis Club Trains Match-Ready Players',
  excerpt = 'Discover the Wimbledon-inspired training approach that blends technique, fitness, and match IQ.',
  author = 'Editorial Team',
  date = 'Apr 18, 2026',
  category = 'Training',
}: Partial<BlogPostCardProps>) {
  return (
    <Card className="rounded-xl border p-6">
      <Badge className="bg-[#e8f5ee] text-[#0f3d2e]">{category}</Badge>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
      <p className="mt-4 text-xs text-muted-foreground">By {author} • {date}</p>
    </Card>
  )
}
