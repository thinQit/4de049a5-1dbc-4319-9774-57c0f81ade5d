export const dynamic = 'force-dynamic';

import HeroSection from '@/components/HeroSection'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <main>
      <HeroSection />
      <LoginForm title="Sign in" subtitle="Use your email to sign in securely." showSocialLogin={false} showForgotPassword={false} />
    </main>
  )
}
