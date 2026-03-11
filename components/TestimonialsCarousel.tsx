'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TestimonialItem {
  name: string
  role: string
  quote: string
  image?: string
}

interface TestimonialsCarouselProps {
  title?: string
  testimonials?: TestimonialItem[]
}

export default function TestimonialsCarousel({
  title = 'What Members Say',
  testimonials = [
    { name: 'Riya Sharma', role: 'State Player', quote: 'The coaching quality and event atmosphere are truly top-tier.', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { name: 'Arjun Menon', role: 'Weekend Member', quote: 'Anand Tennis club feels professional but still welcoming for all levels.', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { name: 'Neha Kapoor', role: 'Parent', quote: 'My son has improved massively with the junior training pathway.', image: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
  ],
}: Partial<TestimonialsCarouselProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">{title}</h2>
        <AnimatedTestimonials testimonials={testimonials.map((t) => ({ ...t, src: t.image || 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' }))} />
      </div>
    </section>
  )
}
