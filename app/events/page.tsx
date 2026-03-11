export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import EventCalendar from "@/components/EventCalendar";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";

export default function EventsPage() {
  return (
    <main>
      <HeroSection />
      <EventCalendar />
      <StatsCounter
        stats={[
          { value: "30+", label: "Events per season" },
          { value: "250+", label: "Active players" },
          { value: "95%", label: "Average fill rate" },
        ]}
      />
      <CTASection />
    </main>
  );
}
