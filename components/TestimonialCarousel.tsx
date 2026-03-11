'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export default function TestimonialCarousel() {
  const testimonials = [
    { quote: 'Best tennis atmosphere in the city.', name: 'Riya Patel', designation: 'Club Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { quote: 'Coaches are excellent and supportive.', name: 'Karan Mehta', designation: 'Parent', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
  ]
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mb-6 text-center text-3xl font-extrabold">What Members Say</h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
