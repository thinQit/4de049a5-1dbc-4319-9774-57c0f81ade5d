export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import TeamGrid from "@/components/TeamGrid";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export default function ClubPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <GalleryGrid />
      <TeamGrid
        headline="Coaching programs"
        subheadline="Structured sessions for juniors, adults, and competitive players—focused on technique, movement, and match play."
        members={[
          {
            name: "Coach Arjun Mehta",
            title: "Head Coach",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Former state-level competitor specializing in serve mechanics, footwork, and match patterns.",
          },
          {
            name: "Coach Neha Desai",
            title: "Junior Development Lead",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Focuses on fundamentals, rally tolerance, and confidence-building for young players.",
          },
        ]}
      />
      <FAQAccordion
        headline="Club FAQs"
        subheadline="Everything you need to know before you join."
        items={[
          {
            question: "Do I need to be an advanced player to join?",
            answer:
              "No. We welcome beginners through advanced players, with coaching and events designed for each level.",
          },
          {
            question: "How often do you publish updates?",
            answer:
              "We publish club updates once per month via the newsletter, including event calendar changes and maintenance notices.",
          },
          {
            question: "Can I try the club before joining?",
            answer:
              "Yes. Request a visit and we’ll arrange a tour and a short hit session during non-peak hours.",
          },
          {
            question: "Are there extra court fees for members?",
            answer:
              "No additional court fees for standard member play. Some tournaments may have entry fees to cover balls and officiating.",
          },
        ]}
      />
      <CTASection />
    </main>
  );
}
