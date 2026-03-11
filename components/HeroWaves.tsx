'use client';
import React from 'react';
import { WavyBackground } from '@/components/ui/backgrounds/wavy-background';
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect';
import { Button } from '@/components/ui/button';

interface HeroWavesProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  waveColors?: string[];
}

export default function HeroWaves({
  title = 'Learn boldly. Grow confidently.',
  subtitle = 'BrightPath Academy helps students of all ages build future-ready skills through engaging, mentor-led programs.',
  ctaLabel = 'Explore Courses',
  ctaHref = '#courses',
  secondaryCtaLabel = 'Talk to an Advisor',
  secondaryCtaHref = '#contact',
  waveColors = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#84cc16', '#a3e635'],
}: Partial<HeroWavesProps>) {
  return (
    <WavyBackground colors={waveColors} backgroundFill="black" waveOpacity={0.5} speed="slow" containerClassName="relative min-h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <TextGenerateEffect words={title} className="text-4xl font-bold text-white md:text-6xl lg:text-7xl" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-xl bg-white px-8 py-6 text-lg text-black hover:bg-white/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="rounded-xl border-white/30 px-8 py-6 text-lg text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </WavyBackground>
  );
}
