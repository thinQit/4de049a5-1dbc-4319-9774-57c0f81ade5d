export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import FormsNewsletter from "@/components/FormsNewsletter";
import NewsletterSignup from "@/components/NewsletterSignup";
import CTASection from "@/components/CTASection";

export default function NewsletterPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Newsletter"
          title="Monthly club update"
          subtitle="One email per month: event calendar release, registration reminders, and club announcements. No spam."
          primaryCta={{ label: "Subscribe", href: "#subscribe" }}
          secondaryCta={{ label: "See Events", href: "/events" }}
        />
      </div>
      <section id="subscribe" className="py-20 md:py-28 bg-muted/30 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4 space-y-10">
          <FormsNewsletter />
          <NewsletterSignup
            headline="Subscribe to the newsletter"
            subheadline="We’ll add you to the list and you can unsubscribe anytime."
            ctaLabel="Subscribe"
          />
        </div>
      </section>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
