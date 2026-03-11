export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import PricingTiers from "@/components/PricingTiers";
import BenefitsList from "@/components/BenefitsList";
import MembershipEnquiryForm from "@/components/MembershipEnquiryForm";

export default function MembershipPage() {
  return (
    <main>
      <HeroSection />
      <PricingTiers />
      <BenefitsList />
      <MembershipEnquiryForm />
    </main>
  );
}
