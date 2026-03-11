'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function NewsletterInlineForm() {
  const [email, setEmail] = useState('')

  return (
    <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <Label htmlFor="newsletter-email" className="text-white">Join the Club Newsletter</Label>
      <div className="mt-3 flex flex-col gap-3 md:flex-row">
        <Input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
        <Button type="submit" className="bg-[#FF6B6B] hover:bg-[#ff6b6b]/90">Subscribe</Button>
      </div>
      <p className="mt-3 text-xs text-white/70">By subscribing, you agree to receive monthly updates. No spam. Unsubscribe anytime.</p>
    </form>
  )
}
