export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import MembershipSignUpForm from "@/components/MembershipSignUpForm";
import CTASection from "@/components/CTASection";

export default function MembershipPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <MembershipSignUpForm />
      <CTASection />
    </main>
  );
}
