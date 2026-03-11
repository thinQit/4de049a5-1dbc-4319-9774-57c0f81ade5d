export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import EventCard from '@/components/EventCard'
import EventRegistrationForm from '@/components/EventRegistrationForm'
import CTABanner from '@/components/CTABanner'

export default function EventDetailPage() {
  return (
    <main>
      <HeroSection />
      <EventCard />
      <EventRegistrationForm />
      <CTABanner headline="Want member pricing on every event?" ctaLabel="Join membership" ctaHref="/membership" />
    </main>
  )
}
