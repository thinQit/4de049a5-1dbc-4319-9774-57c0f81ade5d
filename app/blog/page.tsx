export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTABanner from "@/components/CTABanner";

export default function BlogPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid
        badge="Club Journal"
        headline="Latest posts"
        subheadline="Short, practical reads for players who want to improve."
        features={[
          {
            icon: "Target",
            title: "3 Serve Targets That Win Free Points",
            description:
              "A simple targeting framework to increase first-serve effectiveness without overhauling your motion.",
          },
          {
            icon: "RefreshCw",
            title: "How to Build a Reliable Second Serve Under Pressure",
            description:
              "Spin, margin, and routines—what our coaches teach to keep double faults down in matches.",
          },
          {
            icon: "Users",
            title: "Doubles: The 2 Patterns You Should Run Every Set",
            description:
              "Two repeatable patterns that simplify decision-making and create more net opportunities.",
          },
        ]}
      />
      <CTABanner
        headline="Want coaching tailored to your game?"
        description="Tell us your level and goals—we’ll recommend the right coach and clinic."
        ctaLabel="Enquire About Coaching"
        ctaHref="/contact?topic=coaching"
        secondaryCtaLabel="View Club Info"
        secondaryCtaHref="/club"
      />
    </main>
  );
}
