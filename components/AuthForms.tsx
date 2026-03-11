'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function AuthForms() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form className="space-y-4 rounded-xl border p-6">
        <h3 className="text-lg font-bold">Sign In</h3>
        <div><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <div><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
        <Button className="w-full">Sign In</Button>
      </form>
      <form className="space-y-4 rounded-xl border p-6">
        <h3 className="text-lg font-bold">Sign Up</h3>
        <div><Label>Full Name</Label><Input placeholder="Your name" /></div>
        <div><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
        <div><Label>Password</Label><Input type="password" placeholder="Create password" /></div>
        <Button className="w-full bg-[#5B21B6] hover:bg-[#4a1ba0]">Create Account</Button>
      </form>
    </div>
  )
}
