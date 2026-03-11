export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import VenueMap from '@/components/VenueMap'
import CTABanner from '@/components/CTABanner'

export default function ContactPage() {
  return (
    <main>
      <HeroSection />
      <ContactForm
        headline="Inquiry & membership questions"
        subheadline="We respond within 1–2 business days."
        contactInfo={[
          { icon: 'Mail', label: 'Email', value: 'hello@anandtennisclub.co.uk' },
          { icon: 'Phone', label: 'Phone', value: '+44 20 7946 0188' },
        ]}
      />
      <VenueMap />
      <CTABanner headline="Prefer to start with membership?" ctaLabel="Membership sign-up" ctaHref="/membership" />
    </main>
  )
}
