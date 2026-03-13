"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterSignupProps {
  headline: string;
  subheadline?: string;
  buttonLabel?: string;
}

export default function NewsletterSignup({
  headline = "Get Event Updates First",
  subheadline = "Subscribe for speaker drops, schedule updates, early-bird ticket windows, and VIP announcements.",
  buttonLabel = "Subscribe",
}: Partial<NewsletterSignupProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{headline}</h2>
          {subheadline && <p className="mt-3 text-muted-foreground">{subheadline}</p>}
          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" className="px-8 transition-all duration-200 hover:scale-105">
              {buttonLabel}
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
