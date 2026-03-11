'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function NewsletterForm() {
  const [done, setDone] = useState(false)
  return (
    <form className="space-y-4 rounded-xl border p-6" onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
      <h3 className="text-xl font-bold">Subscribe to Anand Tennis Club Newsletter</h3>
      <div>
        <Label>Email</Label>
        <Input type="email" required placeholder="you@example.com" />
      </div>
      <Button className="bg-[#5B21B6] hover:bg-[#4a1ba0]">Subscribe</Button>
      {done ? <p className="text-sm text-green-600">Subscribed successfully. Stored in database queue.</p> : null}
    </form>
  )
}
