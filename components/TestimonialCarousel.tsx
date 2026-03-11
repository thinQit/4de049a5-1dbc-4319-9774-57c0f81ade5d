'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TestimonialCarouselProps {
  testimonials?: { quote: string; name: string; designation: string; src: string }[]
}

export default function TestimonialCarousel({
  testimonials = [
    { quote: 'Best court experience and coaching quality in the city.', name: 'Rohan Mehta', designation: 'Member since 2021', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { quote: 'The monthly events are thrilling and super organized.', name: 'Aditi Shah', designation: 'Amateur Competitor', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
  ],
}: Partial<TestimonialCarouselProps>) {
  return (
    <section className="py-20">
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  )
}
