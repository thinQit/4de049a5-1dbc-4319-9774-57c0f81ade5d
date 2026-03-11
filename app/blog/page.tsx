export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import BlogList from '@/components/BlogList'
import CTABanner from '@/components/CTABanner'

export default function BlogPage() {
  return (
    <main>
      <HeroSection />
      <BlogList />
      <CTABanner headline="Want monthly updates in your inbox?" ctaLabel="Subscribe" ctaHref="/newsletter" />
    </main>
  )
}
