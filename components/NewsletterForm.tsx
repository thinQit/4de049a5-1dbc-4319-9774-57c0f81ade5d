'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterForm() {
  const [done, setDone] = useState(false)

  return (
    <form
      className='flex flex-col gap-3 sm:flex-row'
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
        setTimeout(() => setDone(false), 2200)
      }}
    >
      <Input type='email' placeholder='Enter your email' className='rounded-xl' />
      <Button type='submit' className='rounded-xl bg-[#0F4D2C] hover:bg-[#0c3f24]'>Subscribe</Button>
      {done && <span className='text-sm text-[#2C8B57]'>Subscribed successfully.</span>}
    </form>
  )
}
