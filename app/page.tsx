export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import HighlightsGrid from "@/components/HighlightsGrid";
import EventsPreview from "@/components/EventsPreview";
import PricingTiers from "@/components/PricingTiers";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighlightsGrid />
      <EventsPreview />
      <PricingTiers />
      <TestimonialsCarousel />
      <NewsletterForm />
    </main>
  );
}
