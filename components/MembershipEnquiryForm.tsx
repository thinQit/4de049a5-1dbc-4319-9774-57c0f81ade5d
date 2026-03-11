'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function MembershipEnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      id='membership'
      className='rounded-2xl border bg-card p-6'
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 2500)
      }}
    >
      <h3 className='text-xl font-bold text-[#0F4D2C]'>Membership Enquiry</h3>
      <div className='mt-4 grid gap-4'>
        <div><Label>Name</Label><Input placeholder='Your full name' /></div>
        <div><Label>Email</Label><Input type='email' placeholder='you@example.com' /></div>
        <div>
          <Label>Plan Interest</Label>
          <Select>
            <SelectTrigger><SelectValue placeholder='Select a plan' /></SelectTrigger>
            <SelectContent>
              <SelectItem value='club'>Club Access</SelectItem>
              <SelectItem value='performance'>Performance</SelectItem>
              <SelectItem value='elite'>Elite</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Playing Level</Label>
          <Select>
            <SelectTrigger><SelectValue placeholder='Select level' /></SelectTrigger>
            <SelectContent>
              <SelectItem value='beginner'>Beginner</SelectItem>
              <SelectItem value='intermediate'>Intermediate</SelectItem>
              <SelectItem value='advanced'>Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div><Label>Message</Label><Textarea placeholder='Tell us your goals and preferred schedule.' /></div>
        <Button type='submit' className='rounded-xl bg-[#0F4D2C] hover:bg-[#0c3f24]'>Send Enquiry</Button>
        {submitted && <p className='text-sm text-[#2C8B57]'>Thanks! Your enquiry was received.</p>}
      </div>
    </form>
  )
}
