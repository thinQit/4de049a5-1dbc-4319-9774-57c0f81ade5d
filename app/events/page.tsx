export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";

export default function EventsPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <ScheduleTimeline />
      <MapSection />
      <CTASection />
    </main>
  );
}
