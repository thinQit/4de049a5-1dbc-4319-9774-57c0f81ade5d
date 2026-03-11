'use client';
import { Vortex } from '@/components/ui/backgrounds/vortex';
import { Button } from '@/components/ui/button';

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = 'Ready for an Unforgettable Event?',
  description = 'Secure your place now and be part of the most vibrant gathering of the year.',
  ctaLabel = 'Book Your Pass',
  ctaHref = '#tickets',
  secondaryCtaLabel = 'Become a Sponsor',
  secondaryCtaHref = '#sponsors',
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex backgroundColor="black" baseHue={25} className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">{headline}</h2>
        {description && <p className="text-white/70 text-sm md:text-xl max-w-xl mt-6 text-center">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-lg bg-amber-400 text-black hover:bg-amber-300" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
