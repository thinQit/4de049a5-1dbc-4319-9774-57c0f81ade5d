'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function MembershipSignupForm() {
  return (
    <form action="/api/membership/apply" method="POST" className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold text-white">Membership Application</h3>
      <div><Label htmlFor="name" className="text-white">Full Name</Label><Input id="name" name="name" required /></div>
      <div><Label htmlFor="email" className="text-white">Email</Label><Input id="email" name="email" type="email" required /></div>
      <div><Label htmlFor="phone" className="text-white">Phone</Label><Input id="phone" name="phone" required /></div>
      <div><Label htmlFor="goals" className="text-white">Tennis Goals</Label><Textarea id="goals" name="goals" /></div>
      <Button type="submit" className="w-full bg-[#4f46e5]">Submit Application</Button>
    </form>
  )
}
