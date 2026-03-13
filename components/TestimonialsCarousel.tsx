'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TestimonialsCarouselProps {
  testimonials?: { quote: string; name: string; designation: string; src: string }[]
}

export default function TestimonialsCarousel({
  testimonials = [
    {
      quote: 'The coaching intensity and tactical depth transformed my game in 8 weeks.',
      name: 'Daniel R.',
      designation: 'Performance Member',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
    },
    {
      quote: 'Anand Tennis Club feels modern, supportive, and tournament-ready every session.',
      name: 'Leila M.',
      designation: 'Intermediate Member',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg',
    },
  ],
}: Partial<TestimonialsCarouselProps>) {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mb-8 text-center font-syne text-3xl font-bold text-white md:text-5xl">Member Testimonials</h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
