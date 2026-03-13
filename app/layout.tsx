import "./globals.css";
import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anand Tennis Club | Wimbledon-inspired tennis, events & membership",
  description:
    "Anand Tennis Club is a modern tennis club with coached sessions, monthly tournaments, ladders, and community doubles nights. Join membership, register for events, and get monthly updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground`}>
        <Navbar
          brandName="Anand Tennis Club"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Club Overview", href: "/club" },
            { label: "Events", href: "/events" },
            { label: "Membership", href: "/membership" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
            { label: "Newsletter", href: "/newsletter" },
          ]}
          ctaLabel="Become a Member"
          ctaHref="/membership"
        />
        {children}
        <Footer
          clubName="Anand Tennis Club"
          email="hello@anandtennisclub.com"
          phone="+1 (415) 019-2046"
          address="14 Centre Court Lane, Anand Park, CA 94016"
        />
      </body>
    </html>
  );
}
