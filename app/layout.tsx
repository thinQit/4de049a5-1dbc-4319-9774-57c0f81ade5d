import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Anand Tennis Club | Wimbledon-Green Tennis Community in Anand",
  description:
    "Anand Tennis Club is a modern tennis community in Anand, Gujarat—coaching, ladders, socials, and tournaments. Join membership plans and register for events online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <NavbarSticky
          logo="Anand Tennis Club"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Events", href: "/events" },
            { label: "Club Overview", href: "/club" },
            { label: "Membership", href: "/membership" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Join Now"
          ctaHref="/membership"
        />
        {children}
        <FooterMultiColumn
          brand="Anand Tennis Club"
          description="Play better. Belong here. Join Anand Tennis Club for coaching, events, ladders, and a vibrant tennis community in Anand."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Events", href: "/events" },
                { label: "Club Overview", href: "/club" },
              ],
            },
            {
              title: "Membership",
              links: [
                { label: "Plans", href: "/membership" },
                { label: "Account", href: "/account" },
                { label: "Newsletter", href: "/newsletter" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "Contact Form", href: "/contact" },
                { label: "Directions", href: "https://maps.google.com/?q=Anand%20Tennis%20Club%2C%20University%20Road%2C%20Anand%20388001" },
                { label: "WhatsApp", href: "https://wa.me/919876543210" },
              ],
            },
          ]}
          copyright="© 2026 Anand Tennis Club. All rights reserved."
        />
      </body>
    </html>
  );
}
