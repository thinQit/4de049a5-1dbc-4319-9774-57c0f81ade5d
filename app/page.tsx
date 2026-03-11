export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import FeatureGrid from "@/components/FeatureGrid";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import PricingCards from "@/components/PricingCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MapSection from "@/components/MapSection";
import NewsletterForm from "@/components/NewsletterForm";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CountdownTimer />
      <FeatureGrid />
      <ScheduleTimeline />
      <PricingCards />
      <TestimonialCarousel />
      <MapSection />
      <NewsletterForm />
      <CTASection />
    </main>
  );
}
