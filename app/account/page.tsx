export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl grid gap-6 md:gap-8 md:grid-cols-3 px-4">
          <Card className="p-6">Profile details for Anand Tennis Club member account.</Card>
          <Card className="p-6">Membership status: Player Member · Active · Renewal: 2026-04-30.</Card>
          <Card className="p-6">No registrations yet. Browse events and join your next ladder.</Card>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
