export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import NewsletterInlineForm from '@/components/NewsletterInlineForm'
import CTASection from '@/components/CTASection'

export default function NewsletterPage() {
  return (
    <main>
      <HeroSection />
      <NewsletterInlineForm />
      <CTASection />
    </main>
  )
}
