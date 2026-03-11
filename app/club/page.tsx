export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import Timeline from "@/components/Timeline";
import FacilitiesGrid from "@/components/FacilitiesGrid";
import TeamGrid from "@/components/TeamGrid";
import BenefitsList from "@/components/BenefitsList";
import CTASection from "@/components/CTASection";

export default function ClubPage() {
  return (
    <main>
      <HeroSection />
      <StatsRow />
      <Timeline />
      <FacilitiesGrid />
      <TeamGrid />
      <BenefitsList />
      <CTASection />
    </main>
  );
}
