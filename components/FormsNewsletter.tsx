'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface FormsNewsletterProps {
  title?: string
}

export default function FormsNewsletter({
  title = 'Newsletter Subscription',
}: Partial<FormsNewsletterProps>) {
  const [prefEvents, setPrefEvents] = useState(true)
  const [prefCoaching, setPrefCoaching] = useState(false)

  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-xl px-4">
        <h2 className="mb-6 font-syne text-3xl font-bold text-white">{title}</h2>
        <form className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div>
            <Label className="text-white">Email</Label>
            <Input type="email" className="mt-1 border-white/20 bg-white/10 text-white" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={prefEvents} onChange={(e) => setPrefEvents(e.target.checked)} />
            Event announcements
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={prefCoaching} onChange={(e) => setPrefCoaching(e.target.checked)} />
            Coaching and training tips
          </label>
          <Button className="w-full rounded-lg bg-[#4f46e5] hover:bg-[#4338ca]">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}
