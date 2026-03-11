export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <main>
      <HeroSection />
      <ContactForm
        headline="Send an inquiry"
        subheadline="Membership sign-ups, event questions, coaching requests, and feedback are all welcome."
        contactInfo={[
          { icon: "Phone", label: "Phone", value: "+91 98765 43210" },
          { icon: "Mail", label: "Email", value: "hello@anandtennisclub.in" },
          { icon: "MapPin", label: "Address", value: "Anand Tennis Club, University Road, Anand 388001" },
        ]}
      />
      <MapSection />
      <CTASection />
    </main>
  );
}
