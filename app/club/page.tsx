export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import TeamGrid from "@/components/TeamGrid";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export default function ClubPage() {
  return (
    <main>
      <HeroSection />
      <GalleryGrid />
      <TeamGrid
        headline="Coaching team"
        subheadline="Structured sessions with clear progressions—from fundamentals to match play."
        members={[
          {
            name: "Riya Patel",
            title: "Head Coach",
            bio: "ITF-certified coach focused on serve mechanics, footwork, and match patterns. Leads adult clinics and performance blocks.",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            name: "Kunal Mehta",
            title: "Junior Program Lead",
            bio: "Specializes in junior development, coordination, and confidence-building through game-based training.",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            name: "Sana Qureshi",
            title: "Fitness & Mobility Coach",
            bio: "Warm-up and recovery programming for tennis-specific movement, injury prevention, and conditioning.",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
          },
        ]}
      />
      <FAQAccordion
        headline="Club policies & court etiquette"
        subheadline="Simple rules that keep play fair and enjoyable."
        items={[
          {
            question: "How does court booking work?",
            answer:
              "Members can book courts in advance based on their plan. Peak hours (6:30–9:30 PM) have a 60-minute limit to maximize access.",
          },
          {
            question: "What should I bring?",
            answer:
              "Non-marking tennis shoes, a racquet, and water. Balls are provided for coached sessions; for casual play, players typically bring their own.",
          },
          {
            question: "Are guests allowed?",
            answer:
              "Yes. Members can bring up to 2 guests per month. Guest fee is ₹150 per visit, subject to court availability.",
          },
          {
            question: "Do you have junior batches?",
            answer:
              "Yes. Junior batches run Tue–Fri (5:00–7:00 PM) and Sat–Sun mornings. Placement is based on age and level.",
          },
        ]}
      />
      <CTASection />
    </main>
  );
}
