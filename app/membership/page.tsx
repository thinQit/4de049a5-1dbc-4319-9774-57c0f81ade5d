export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import PricingTable from '@/components/PricingTable'
import MembershipSignupForm from '@/components/MembershipSignupForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

export default function MembershipPage() {
  return (
    <main>
      <HeroSection />
      <PricingTable
        headline="Choose your plan"
        tiers={[
          { name: 'Social', price: '£29', period: '/mo', description: 'Casual play', features: ['Off-peak booking'], ctaLabel: 'Choose Social', ctaHref: '/membership?plan=social' },
          { name: 'Standard', price: '£49', period: '/mo', description: 'Regular play', features: ['Peak + off-peak'], ctaLabel: 'Choose Standard', ctaHref: '/membership?plan=standard', highlighted: true },
          { name: 'Performance', price: '£79', period: '/mo', description: 'Competitive focus', features: ['Priority booking'], ctaLabel: 'Choose Performance', ctaHref: '/membership?plan=performance' },
        ]}
      />
      <MembershipSignupForm />
      <FAQAccordion
        headline="Membership FAQs"
        items={[
          { question: 'Do I need experience?', answer: 'No, beginners are welcome.' },
          { question: 'Can I bring guests?', answer: 'Yes, guest access depends on plan.' },
        ]}
      />
      <CTABanner headline="Want to visit before joining?" ctaLabel="Request a tour" ctaHref="/contact?reason=visit" />
    </main>
  )
}
