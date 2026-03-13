'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface FormsContactProps {
  title?: string
}

export default function FormsContact({ title = 'Contact & Feedback' }: Partial<FormsContactProps>) {
  const [consent, setConsent] = useState(false)

  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-6 font-syne text-3xl font-bold text-white">{title}</h2>
        <form className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div>
            <Label className="text-white">Full Name</Label>
            <Input className="mt-1 border-white/20 bg-white/10 text-white" />
          </div>
          <div>
            <Label className="text-white">Email</Label>
            <Input type="email" className="mt-1 border-white/20 bg-white/10 text-white" />
          </div>
          <div>
            <Label className="text-white">Topic</Label>
            <Input placeholder="Membership, events, coaching..." className="mt-1 border-white/20 bg-white/10 text-white" />
          </div>
          <div>
            <Label className="text-white">Message</Label>
            <Textarea className="mt-1 border-white/20 bg-white/10 text-white" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            I consent to being contacted by Anand Tennis Club.
          </label>
          <Button disabled={!consent} className="w-full rounded-lg bg-[#4f46e5] hover:bg-[#4338ca]">
            Send Inquiry
          </Button>
        </form>
      </div>
    </section>
  )
}
