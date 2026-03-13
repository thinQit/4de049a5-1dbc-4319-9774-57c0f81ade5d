"use client";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = "Ready to Secure Your Spot?",
  description = "Tickets are moving fast. Join the next wave of innovators, creators, and leaders before registration closes.",
  ctaLabel = "Buy Tickets",
  ctaHref = "#",
  secondaryCtaLabel = "Become a Sponsor",
  secondaryCtaHref = "#",
}: Partial<CTAVortexProps>) {
  return (
    <section className="mx-auto h-[30rem] w-full overflow-hidden rounded-md">
      <Vortex
        backgroundColor="black"
        baseHue={300}
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <div className="animate-fade-in-up">
          <h2 className="text-center text-2xl font-bold text-primary-foreground md:text-6xl">{headline}</h2>
          {description && <p className="mx-auto mt-6 max-w-xl text-center text-sm text-primary-foreground/70 md:text-xl">{description}</p>}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-background px-8 py-6 text-lg text-foreground transition-all duration-200 hover:scale-105 hover:bg-background/90"
              asChild
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button
                variant="outline"
                size="lg"
                className="border-border px-8 py-6 text-lg text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-background/10"
                asChild
              >
                <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
              </Button>
            )}
          </div>
        </div>
      </Vortex>
    </section>
  );
}
