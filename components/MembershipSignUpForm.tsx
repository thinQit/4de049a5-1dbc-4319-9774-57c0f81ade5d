'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface MembershipSignUpFormProps {
  actionUrl?: string
}

export default function MembershipSignUpForm({
  actionUrl = '/api/membership-inquiries',
}: Partial<MembershipSignUpFormProps>) {
  const [loading, setLoading] = useState(false)

  return (
    <form
      action={actionUrl}
      method="POST"
      onSubmit={() => setLoading(true)}
      className="mx-auto max-w-2xl space-y-5 rounded-xl border bg-card p-6"
    >
      <h2 className="text-2xl font-black">Membership Inquiry</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="plan">Plan</Label>
          <Select id="plan" name="plan" defaultValue="monthly">
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="level">Playing Level</Label>
          <Select id="level" name="level" defaultValue="intermediate">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Tell us your tennis goals..." />
      </div>
      <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}
