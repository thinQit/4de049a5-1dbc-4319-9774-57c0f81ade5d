'use client'

import EventCard from '@/components/EventCard'

export default function EventsPreview() {
  return (
    <section className='bg-[#F7FBF8] py-20 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Upcoming Events</h2>
        <p className='mt-2 text-muted-foreground'>From social rallies to elite competitions.</p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          <EventCard title='Members Spring Cup' date='03 Apr 2026' time='10:00' tag='Club Cup' />
          <EventCard title='Junior Skills Weekend' date='18 Apr 2026' time='09:00' tag='Coaching' />
          <EventCard title='Charity Doubles Gala' date='01 May 2026' time='17:30' tag='Community' />
        </div>
      </div>
    </section>
  )
}
