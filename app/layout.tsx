import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Anand Tennis Club | Wimbledon-Inspired Tennis in Anand",
  description:
    "Join Anand Tennis Club for coaching, leagues, and tournaments in Anand, Gujarat. Wimbledon-green style, modern facilities, and monthly updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <FooterMultiColumn
          brand="Anand Tennis Club"
          description="Modern tennis. Classic standards."
          columns={[
            {
              title: "Club",
              links: [
                { label: "Home", href: "/" },
                { label: "Club Overview", href: "/club" },
                { label: "Events", href: "/events" },
                { label: "Blog", href: "/blog" },
              ],
            },
            {
              title: "Membership",
              links: [
                { label: "Sign Up", href: "/membership" },
                { label: "Pricing", href: "/#pricing" },
                { label: "FAQs", href: "/club#faq" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "Contact Form", href: "/contact" },
                { label: "Front Desk: +91 98765 43210", href: "tel:+919876543210" },
                { label: "hello@anandtennisclub.in", href: "mailto:hello@anandtennisclub.in" },
              ],
            },
          ]}
          copyright="© 2026 Anand Tennis Club. All rights reserved."
        />
      </body>
    </html>
  );
}
