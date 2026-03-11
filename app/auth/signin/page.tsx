export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import LoginForm from "@/components/LoginForm";

export default function SignInPage() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4">
          <LoginForm
            title="Sign in to Anand Tennis Club"
            subtitle="Use email to sign in. Social providers optional."
            showSocialLogin={false}
            showForgotPassword={true}
          />
        </div>
      </section>
    </main>
  );
}
