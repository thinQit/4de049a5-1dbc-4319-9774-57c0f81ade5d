export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import FormsContact from "@/components/FormsContact";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Contact"
          title="Contact Anand Tennis Club"
          subtitle="Questions about membership, events, coaching, or sponsorship? Send a message and we’ll get back within 1–2 business days."
          primaryCta={{ label: "Send a Message", href: "#contact-form" }}
          secondaryCta={{ label: "Get Directions", href: "#map" }}
        />
      </div>
      <section id="contact-form" className="py-20 md:py-28 bg-muted/30 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4">
          <FormsContact />
        </div>
      </section>
      <section id="map" className="py-20 md:py-28 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4">
          <ContactForm
            headline="Find us"
            subheadline="14 Centre Court Lane, Anand Park, CA 94016"
            contactInfo={[
              { icon: "Phone", label: "Front Desk", value: "+1 (415) 019-2046" },
              { icon: "Mail", label: "Email", value: "hello@anandtennisclub.com" },
              { icon: "Clock3", label: "Hours", value: "Mon–Fri 6:00–22:00 • Sat–Sun 7:00–21:00" },
            ]}
          />
        </div>
      </section>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
