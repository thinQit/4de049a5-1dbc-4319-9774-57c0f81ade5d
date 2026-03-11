export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import SignupForm from "@/components/SignupForm";

export default function SignUpPage() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4">
          <SignupForm
            title="Create your Anand Tennis Club account"
            subtitle="A simple account for registrations and membership records."
            showSocialLogin={false}
          />
        </div>
      </section>
    </main>
  );
}
