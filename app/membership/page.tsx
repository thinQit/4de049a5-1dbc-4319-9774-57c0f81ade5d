export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import MembershipApplicationForm from "@/components/MembershipApplicationForm";
import CTASection from "@/components/CTASection";

export default function MembershipPage() {
  return (
    <main>
      <HeroSection />
      <PricingCards />
      <MembershipApplicationForm />
      <CTASection />
    </main>
  );
}
