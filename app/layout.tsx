import './globals.css'
import { Fraunces, Inter } from 'next/font/google'
import NavbarSticky from '@/components/NavbarSticky'
import FooterMultiColumn from '@/components/FooterMultiColumn'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} bg-background text-foreground`}>
        <NavbarSticky
          logo="Anand Tennis Club"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Club', href: '/club' },
            { label: 'Membership', href: '/membership' },
            { label: 'Events', href: '/events' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Join the Club"
          ctaHref="/membership"
        />
        {children}
        <FooterMultiColumn
          brand="Anand Tennis Club"
          description="Play year-round. Train with purpose. Compete with community."
          columns={[
            {
              title: 'Explore',
              links: [
                { label: 'Club', href: '/club' },
                { label: 'Membership', href: '/membership' },
                { label: 'Events', href: '/events' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'Blog', href: '/blog' },
                { label: 'Newsletter', href: '/newsletter' },
                { label: 'Contact', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Anand Tennis Club. All rights reserved."
        />
      </body>
    </html>
  )
}
