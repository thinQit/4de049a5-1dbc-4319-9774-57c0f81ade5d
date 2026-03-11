'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

interface AuthCardProps {
  title?: string
}

export default function AuthCard({ title = 'Sign in to Anand Tennis Club' }: Partial<AuthCardProps>) {
  return (
    <Card className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <form className="mt-4 space-y-4">
        <div><Label htmlFor="email" className="text-white">Email</Label><Input id="email" type="email" placeholder="you@email.com" /></div>
        <Button type="submit" className="w-full bg-[#4f46e5]">Continue with Email</Button>
      </form>
    </Card>
  )
}
