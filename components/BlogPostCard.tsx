"use client";

import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface BlogPostCardProps {
  title?: string
  excerpt?: string
  date?: string
  href?: string
}

export default function BlogPostCard({
  title = 'How to Improve Your Serve in 30 Days',
  excerpt = 'A practical month-long routine used by our coaches to build power and precision.',
  date = '2026-01-05',
  href = '/blog/improve-serve-30-days',
}: Partial<BlogPostCardProps>) {
  return (
    <Card className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">{date}</p>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{excerpt}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:underline">
        Read more →
      </Link>
    </Card>
  )
}
