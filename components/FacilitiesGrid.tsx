'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FacilitiesGrid() {
  return (
    <section className='bg-[#F7FBF8] py-20 md:py-24' id='facilities'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Facilities</h2>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          <Card><CardHeader><CardTitle>Championship Courts</CardTitle></CardHeader><CardContent>Grass and hard courts maintained year-round.</CardContent></Card>
          <Card><CardHeader><CardTitle>Fitness & Recovery</CardTitle></CardHeader><CardContent>Strength studio, physio room, and recovery lounge.</CardContent></Card>
          <Card><CardHeader><CardTitle>Clubhouse</CardTitle></CardHeader><CardContent>Member lounge, café, and event terrace.</CardContent></Card>
        </div>
        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          <Image src='https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg' alt='Gallery 1' width={1600} height={900} unoptimized className='rounded-xl object-cover' />
          <Image src='https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' alt='Gallery 2' width={800} height={600} unoptimized className='rounded-xl object-cover' />
          <Image src='https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' alt='Gallery 3' width={800} height={600} unoptimized className='rounded-xl object-cover' />
        </div>
      </div>
    </section>
  )
}
