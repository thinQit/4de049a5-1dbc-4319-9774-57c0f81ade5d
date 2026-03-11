'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export default function TestimonialsCarousel() {
  const testimonials = [
    { quote: 'The coaching quality and court conditions are simply world-class.', name: 'Emma Clarke', designation: 'Performance Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { quote: 'Every monthly event is exceptionally organized and exciting.', name: 'Daniel Reed', designation: 'Tournament Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { quote: 'Our junior improved confidence and technique within one season.', name: 'Sophie Martin', designation: 'Parent Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg' },
  ]

  return (
    <section className='bg-[#F7FBF8] py-20 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>What Members Say</h2>
        <div className='mt-8'>
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </section>
  )
}
