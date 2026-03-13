export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import CountdownTimer from "@/components/CountdownTimer";
import SpeakerGrid from "@/components/SpeakerGrid";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import TicketPricing from "@/components/TicketPricing";
import VenueInfo from "@/components/VenueInfo";
import SponsorLogos from "@/components/SponsorLogos";
import GalleryMasonry from "@/components/GalleryMasonry";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Anand Tennis Club: Wimbledon energy, local community"
          subheadline="A modern tennis club with coached sessions, competitive ladders, and monthly events. Join for court time, training plans, and a calendar that keeps you playing year-round."
          primaryCta={{ label: "Become a Member", href: "/membership" }}
          secondaryCta={{ label: "View Events", href: "/events" }}
          backgroundImageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576912/site-images/corporate/10384120.jpg"
        />
      </div>
      <div className="animate-fade-in-up">
        <CountdownTimer />
      </div>
      <div className="animate-fade-in-up">
        <SpeakerGrid />
      </div>
      <div className="animate-fade-in-up">
        <ScheduleTimeline />
      </div>
      <div className="animate-fade-in-up">
        <TicketPricing />
      </div>
      <div className="animate-fade-in-up">
        <VenueInfo />
      </div>
      <div className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4">
          <GalleryMasonry
            headline="Club moments from courtside"
            subheadline="Training, tournaments, social doubles, and community match days."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576867/site-images/corporate/1181625.jpg", alt: "Players in rally during club event" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577732/site-images/hero-backgrounds/12778855.jpg", alt: "Night tennis with lit courts" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/1251842.jpg", alt: "Coach instruction session" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg", alt: "Doubles social group photo" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg", alt: "Tournament finals on outdoor courts" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576864/site-images/corporate/1367269.jpg", alt: "Clubhouse gathering after matches" },
            ]}
          />
        </div>
      </div>
      <div className="animate-fade-in-up">
        <SponsorLogos />
      </div>
      <div className="animate-fade-in-up">
        <FAQAccordion />
      </div>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
