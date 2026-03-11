'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function MembershipApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form className="space-y-4 rounded-xl border p-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
      <h3 className="text-xl font-bold">Membership Application - Anand Tennis Club</h3>
      <div><Label>Full Name</Label><Input required placeholder="Your name" /></div>
      <div><Label>Email</Label><Input required type="email" placeholder="you@example.com" /></div>
      <div><Label>Phone</Label><Input placeholder="+91 98765 43210" /></div>
      <div><Label>Experience</Label><Textarea placeholder="Tell us about your playing level..." /></div>
      <Button className="bg-[#0f3d2e] hover:bg-[#15553f]">Submit Application</Button>
      {submitted ? <p className="text-sm text-green-600">Application received. Confirmation sent on-screen successfully.</p> : null}
    </form>
  )
}
