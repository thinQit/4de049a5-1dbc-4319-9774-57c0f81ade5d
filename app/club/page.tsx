export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import GalleryGrid from '@/components/GalleryGrid'
import TeamGrid from '@/components/TeamGrid'
import CTASection from '@/components/CTASection'

export default function ClubPage() {
  return (
    <main>
      <HeroSection />
      <GalleryGrid />
      <TeamGrid
        headline="Coaching team"
        members={[
          { name: 'Priya Nair', title: 'Head Coach', bio: 'Adult pathway and league prep.' },
          { name: 'Daniel Hughes', title: 'Performance Coach', bio: 'Serve + return specialist.' },
          { name: 'Meera Anand', title: 'Junior Program Lead', bio: 'Junior fundamentals and confidence.' },
        ]}
      />
      <CTASection />
    </main>
  )
}
