export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import EventCalendar from '@/components/EventCalendar'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'

export default function EventsPage() {
  return (
    <main>
      <HeroSection />
      <EventCalendar />
      <FAQAccordion
        headline="Event FAQs"
        items={[
          { question: 'Do I need to be a member?', answer: 'Some events are open to non-members.' },
          { question: 'What should I bring?', answer: 'Racket, tennis shoes, and water.' },
        ]}
      />
      <CTASection />
    </main>
  )
}
