import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Greenline Tennis Club | Premium Wimbledon-Inspired Tennis in London",
  description:
    "Join Greenline Tennis Club in Wimbledon, London. Premium indoor & outdoor courts, LTA-accredited coaching, monthly tournaments, and membership plans for adults and juniors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground`}>
        <NavbarSticky
          logo="Greenline Tennis Club"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Club", href: "/club" },
            { label: "Events", href: "/events" },
            { label: "Membership", href: "/membership" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Join the Club"
          ctaHref="/membership"
        />
        {children}
        <FooterMultiColumn
          brand="Greenline Tennis Club"
          description="Premium coaching, pristine courts, and a calendar built for competitors."
          columns={[
            {
              title: "Club",
              links: [
                { label: "About", href: "/club#about" },
                { label: "Facilities", href: "/club#facilities" },
                { label: "Coaching Team", href: "/club#coaching-team" },
              ],
            },
            {
              title: "Membership",
              links: [
                { label: "Plans & Pricing", href: "/membership#membership-pricing" },
                { label: "Enquiry Form", href: "/membership#membership-form" },
                { label: "Benefits", href: "/club#membership-benefits" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "hello@greenlinetennis.co.uk", href: "mailto:hello@greenlinetennis.co.uk" },
                { label: "+44 20 7946 1188", href: "tel:+442079461188" },
                { label: "Events Calendar", href: "/events" },
              ],
            },
          ]}
          copyright="© 2026 Greenline Tennis Club. All rights reserved."
        />
      </body>
    </html>
  );
}
