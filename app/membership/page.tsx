export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import FormsMembershipSignup from "@/components/FormsMembershipSignup";
import CTASection from "@/components/CTASection";

export default function MembershipPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Membership"
          title="Membership sign-up"
          subtitle="Choose a plan, tell us your level, and we’ll set up your first booking and welcome session."
          primaryCta={{ label: "Start Sign-Up", href: "#signup" }}
          secondaryCta={{ label: "Compare Plans", href: "/#tickets" }}
        />
      </div>
      <div id="signup" className="animate-fade-in-up py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <FormsMembershipSignup />
        </div>
      </div>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
