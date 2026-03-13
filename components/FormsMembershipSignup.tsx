'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface FormsMembershipSignupProps {
  title?: string
}

export default function FormsMembershipSignup({
  title = 'Membership Sign-Up Form',
}: Partial<FormsMembershipSignupProps>) {
  const [consent, setConsent] = useState(false)

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-6 font-syne text-3xl font-bold text-white">{title}</h2>
        <form className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div><Label className="text-white">Full Name</Label><Input className="mt-1 border-white/20 bg-white/10 text-white" /></div>
          <div><Label className="text-white">Email</Label><Input type="email" className="mt-1 border-white/20 bg-white/10 text-white" /></div>
          <div><Label className="text-white">Plan</Label><Input placeholder="Starter / Performance / Elite" className="mt-1 border-white/20 bg-white/10 text-white" /></div>
          <div><Label className="text-white">Current Level</Label><Input placeholder="Beginner / Intermediate / Advanced" className="mt-1 border-white/20 bg-white/10 text-white" /></div>
          <div><Label className="text-white">Goals</Label><Textarea className="mt-1 border-white/20 bg-white/10 text-white" /></div>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            I agree to membership terms and communication updates.
          </label>
          <Button disabled={!consent} className="w-full rounded-lg bg-[#10b981] hover:bg-[#059669]">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  )
}
