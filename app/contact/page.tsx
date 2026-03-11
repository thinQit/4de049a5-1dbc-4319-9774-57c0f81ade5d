export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <ContactForm
        headline="Inquiry form"
        subheadline="Choose a topic so we route your message to the right team."
        contactInfo={[
          { icon: "Phone", label: "Phone", value: "+91 98765 43210" },
          { icon: "Mail", label: "Email", value: "hello@anandtennisclub.in" },
          {
            icon: "MapPin",
            label: "Address",
            value: "Near Sardar Patel Ring Road, Anand, Gujarat 388001",
          },
        ]}
      />
      <MapSection />
      <CTASection />
    </main>
  );
}
