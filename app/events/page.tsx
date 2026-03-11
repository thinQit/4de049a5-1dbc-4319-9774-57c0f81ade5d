export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import FiltersBar from "@/components/FiltersBar";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";

export default function EventsPage() {
  return (
    <main>
      <HeroSection />
      <FiltersBar />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
