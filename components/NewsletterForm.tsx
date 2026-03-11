'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface NewsletterFormProps {
  actionUrl?: string
  message?: string
}

export default function NewsletterForm({
  actionUrl = '/api/newsletter-subscribe',
  message = 'Get monthly updates on events, coaching tips, and club announcements.',
}: Partial<NewsletterFormProps>) {
  const [loading, setLoading] = useState(false)

  return (
    <form
      action={actionUrl}
      method="POST"
      onSubmit={() => setLoading(true)}
      className="rounded-xl border bg-card p-6"
    >
      <h3 className="text-xl font-bold">Newsletter Subscription</h3>
      <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      <div className="mt-4">
        <Label htmlFor="newsletterEmail">Email</Label>
        <div className="mt-2 flex gap-2">
          <Input id="newsletterEmail" type="email" name="email" required placeholder="you@example.com" />
          <Button type="submit" disabled={loading}>
            {loading ? 'Joining...' : 'Subscribe'}
          </Button>
        </div>
      </div>
    </form>
  )
}
