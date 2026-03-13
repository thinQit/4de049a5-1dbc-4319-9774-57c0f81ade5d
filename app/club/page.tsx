export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import TeamGrid from "@/components/TeamGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import SponsorLogos from "@/components/SponsorLogos";
import CTASection from "@/components/CTASection";

export default function ClubPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Club Overview"
          title="A modern club built for consistent tennis"
          subtitle="Facilities, coaching philosophy, and the community programs that keep Anand Tennis Club active all year."
          primaryCta={{ label: "Membership Options", href: "/membership" }}
          secondaryCta={{ label: "Contact the Club", href: "/contact" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-muted/30 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4">
          <TeamGrid
            headline="Meet the coaching team"
            subheadline="Sporty, structured training with match realism—serve patterns, return games, and point construction."
            members={[
              {
                name: "Coach Riya Anand",
                title: "Head Coach • Performance & Footwork",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
                bio: "Former collegiate No. 1 singles. Specializes in movement efficiency and first-strike tennis.",
              },
              {
                name: "Miguel Santos",
                title: "Assistant Coach • Doubles & Net Play",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
                bio: "Doubles specialist focused on positioning, poaching cues, and transition volleys.",
              },
              {
                name: "Hannah Lee",
                title: "Junior Program Lead",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
                bio: "Builds confident juniors through fundamentals, rally targets, and age-appropriate competition.",
              },
              {
                name: "Dev Patel",
                title: "Strength & Conditioning Partner",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
                bio: "On-court speed, agility, and injury-prevention programming tailored for tennis.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4">
          <GalleryMasonry
            headline="Facilities & amenities"
            subheadline="Everything you need for training, match play, and recovery."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576876/site-images/corporate/1181252.jpg", alt: "LED-lit evening tennis court" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg", alt: "Ball machine lane training" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13551579.jpg", alt: "Clubhouse lounge interior" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg", alt: "Pro shop equipment wall" },
            ]}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <SponsorLogos />
      </div>
      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
