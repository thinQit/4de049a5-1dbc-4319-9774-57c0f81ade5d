export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTASection from "@/components/CTASection";

export default function NewsletterPage() {
  return (
    <main>
      <HeroSection />
      <NewsletterSignup
        headline="Subscribe"
        subheadline="We send one email per month. No Resend integration for now."
        ctaLabel="Subscribe"
      />
      <CTASection />
    </main>
  );
}
