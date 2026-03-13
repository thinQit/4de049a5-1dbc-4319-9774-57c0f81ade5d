export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import EventCalendar from "@/components/EventCalendar";
import CTASection from "@/components/CTASection";

export default function EventsPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Event Calendar"
          title="Events calendar"
          subtitle="Monthly tournaments, clinics, socials, and junior pathways—register in minutes and get match-ready details."
          primaryCta={{ label: "Register for Next Event", href: "#spring-green-open" }}
          secondaryCta={{ label: "Membership Pricing", href: "/#tickets" }}
        />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <EventCalendar />
        </div>
      </div>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
