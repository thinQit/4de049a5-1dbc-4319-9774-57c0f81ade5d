export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import FeatureCards from "@/components/FeatureCards";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import PricingTable from "@/components/PricingTable";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MapSection from "@/components/MapSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <CountdownTimer />
      <FeatureCards />
      <ScheduleTimeline />
      <PricingTable
        headline="Memberships designed for how you play"
        subheadline="Choose a plan that fits your schedule. Upgrade anytime—no hidden court fees for members."
        tiers={[
          {
            name: "Social Member",
            price: "₹999",
            period: "per month",
            description: "Perfect for weekend play and club socials.",
            features: [
              "Access to member booking windows",
              "2 guest passes per month",
              "Entry to monthly doubles social",
              "Member newsletter (monthly)",
            ],
            ctaLabel: "Choose Social",
            ctaHref: "/membership?plan=social",
          },
          {
            name: "Player Member",
            price: "₹1,999",
            period: "per month",
            description: "For regular players who want leagues and priority courts.",
            features: [
              "Priority court booking",
              "Singles ladder participation",
              "Discounted tournament entry fees",
              "1 complimentary stringing labor per month",
            ],
            ctaLabel: "Choose Player",
            ctaHref: "/membership?plan=player",
            highlighted: true,
          },
          {
            name: "Family Member",
            price: "₹3,499",
            period: "per month",
            description: "A shared plan for households that play together.",
            features: [
              "Up to 4 family profiles",
              "Junior clinic discount (10%)",
              "Priority weekend booking",
              "Family-only round robin invites",
            ],
            ctaLabel: "Choose Family",
            ctaHref: "/membership?plan=family",
          },
        ]}
      />
      <TestimonialsCarousel />
      <MapSection />
      <NewsletterSignup
        headline="Monthly updates—events, draws, and court notices"
        subheadline="We publish updates once per month. No spam—just what you need to plan your tennis."
        ctaLabel="Subscribe"
      />
      <CTASection />
    </main>
  );
}
