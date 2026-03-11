export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import SignupForm from '@/components/SignupForm'

export default function RegisterPage() {
  return (
    <main>
      <HeroSection />
      <SignupForm title="Create account" subtitle="Use your email to create an account." showSocialLogin={false} />
    </main>
  )
}
