export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function ContactPage() {
  return (
    <main>
      <HeroSection />
      <ContactDetails />
      <ContactForm
        headline="Enquiry form"
        subheadline="Tell us what you’re looking for and we’ll point you to the right membership, coach, or event."
        contactInfo={[
          { icon: "MapPin", label: "Address", value: "18 Somerset Road, Wimbledon, London SW19 5JD" },
          { icon: "Phone", label: "Phone", value: "+44 20 7946 1188" },
          { icon: "Mail", label: "Email", value: "hello@greenlinetennis.co.uk" },
        ]}
      />
      <NewsletterSignup
        headline="Monthly updates (no spam)"
        subheadline="One email per month with events, tournaments, and coaching blocks."
        ctaLabel="Subscribe"
      />
    </main>
  );
}
