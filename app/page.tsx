export const dynamic = 'force-dynamic';

import HeroImage from '@/components/HeroImage'
import CountdownTimer from '@/components/CountdownTimer'
import FeaturesGrid from '@/components/FeaturesGrid'
import ScheduleTimeline from '@/components/ScheduleTimeline'
import PricingTable from '@/components/PricingTable'
import TestimonialsAnimated from '@/components/TestimonialsAnimated'
import VenueMap from '@/components/VenueMap'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function HomePage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Wimbledon-inspired tennis, built for everyday players"
        subheadline="Anand Tennis Club is a modern community club with coached sessions, social doubles, and competitive ladders."
        primaryCta={{ label: 'Join the Club', href: '/membership' }}
        secondaryCta={{ label: 'View Events', href: '/events' }}
      />
      <CountdownTimer />
      <FeaturesGrid
        headline="A club designed for training, play, and belonging"
        subheadline="From beginners to league players, we make it easy to get on court and improve."
        features={[
          { icon: 'CalendarDays', title: 'Court booking that actually works', description: 'Reserve courts up to 7 days in advance.' },
          { icon: 'Trophy', title: 'Coaching pathways', description: 'Structured clinics and private lessons.' },
          { icon: 'Users', title: 'Social tennis every week', description: 'Friday socials and Sunday mix-ins.' },
          { icon: 'Medal', title: 'Competitive ladders & leagues', description: 'Monthly ranking updates and team play.' },
        ]}
      />
      <ScheduleTimeline />
      <PricingTable
        headline="Membership that fits how you play"
        subheadline="Transparent pricing with real court access."
        tiers={[
          { name: 'Social', price: '£29', period: '/mo', description: 'Casual play', features: ['Off-peak booking', 'Social sessions'], ctaLabel: 'Choose Social', ctaHref: '/membership?plan=social' },
          { name: 'Standard', price: '£49', period: '/mo', description: 'Most popular', features: ['Peak + off-peak', '2 guest passes'], ctaLabel: 'Choose Standard', ctaHref: '/membership?plan=standard', highlighted: true },
          { name: 'Performance', price: '£79', period: '/mo', description: 'Priority + perks', features: ['Priority booking', '1 free clinic/month'], ctaLabel: 'Choose Performance', ctaHref: '/membership?plan=performance' },
        ]}
      />
      <TestimonialsAnimated
        title="Loved by players across Wimbledon"
        testimonials={[
          { quote: 'Great courts and community.', name: 'Amira Khan', designation: 'Standard Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
          { quote: 'Ladder system is brilliantly run.', name: 'Tom Weaver', designation: 'Performance Member', src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
        ]}
      />
      <VenueMap />
      <NewsletterSignup
        headline="Get monthly club updates and event drops"
        subheadline="One email per month. No spam."
        ctaLabel="Subscribe"
      />
    </main>
  )
}
