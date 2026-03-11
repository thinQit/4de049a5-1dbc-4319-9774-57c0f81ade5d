'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function EventRegistrationForm() {
  return (
    <form action="/api/events/register" method="POST" className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold text-white">Event Registration</h3>
      <div><Label htmlFor="eventName" className="text-white">Event Name</Label><Input id="eventName" name="eventName" required /></div>
      <div><Label htmlFor="name" className="text-white">Your Name</Label><Input id="name" name="name" required /></div>
      <div><Label htmlFor="email" className="text-white">Email</Label><Input id="email" name="email" type="email" required /></div>
      <div><Label htmlFor="notes" className="text-white">Notes</Label><Textarea id="notes" name="notes" /></div>
      <Button type="submit" className="w-full bg-[#4f46e5]">Confirm Registration</Button>
    </form>
  )
}
