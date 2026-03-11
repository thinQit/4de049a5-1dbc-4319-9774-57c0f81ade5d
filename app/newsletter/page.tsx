export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import NewsletterForm from "@/components/NewsletterForm";

export default function NewsletterPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <NewsletterForm />
    </main>
  );
}
