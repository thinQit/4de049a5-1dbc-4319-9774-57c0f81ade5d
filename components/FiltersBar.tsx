'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function FiltersBar() {
  return (
    <div className='rounded-2xl border bg-card p-4'>
      <div className='grid gap-3 md:grid-cols-3'>
        <Select>
          <SelectTrigger><SelectValue placeholder='Event Type' /></SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Types</SelectItem>
            <SelectItem value='tournament'>Tournament</SelectItem>
            <SelectItem value='coaching'>Coaching</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger><SelectValue placeholder='Month' /></SelectTrigger>
          <SelectContent>
            <SelectItem value='april'>April</SelectItem>
            <SelectItem value='may'>May</SelectItem>
            <SelectItem value='june'>June</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger><SelectValue placeholder='Skill Level' /></SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Levels</SelectItem>
            <SelectItem value='beginner'>Beginner</SelectItem>
            <SelectItem value='advanced'>Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
