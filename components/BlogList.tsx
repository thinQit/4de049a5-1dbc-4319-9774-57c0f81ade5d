"use client";

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface BlogListProps {
  posts?: { title: string; excerpt: string; month: string }[]
}

export default function BlogList({
  posts = [
    { title: 'How to Build Match Confidence', excerpt: 'Mental game strategies from our coaching team.', month: 'January' },
    { title: 'Wimbledon-Style Footwork Drills', excerpt: 'Train movement with elite court patterns.', month: 'February' },
  ],
}: Partial<BlogListProps>) {
  return (
    <section className="py-20">
      <p className="mb-6 text-sm text-white/70">Publishing cadence: once per month.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Badge className="bg-[#10b981] text-white">{post.month}</Badge>
            <h4 className="mt-3 font-bold text-white">{post.title}</h4>
            <p className="mt-2 text-sm text-white/75">{post.excerpt}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
