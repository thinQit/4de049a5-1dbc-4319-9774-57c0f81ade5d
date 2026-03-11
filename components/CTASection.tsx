"use client";

import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Ready to Play at Anand Tennis Club?',
  subtitle = 'Join our energetic tennis community and elevate your game this season.',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-[#0f3d2e] py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-extrabold md:text-5xl">{title}</h2>
        <p className="mt-4 text-white/85">{subtitle}</p>
        <Button className="mt-8 bg-[#FFD700] text-[#0f3d2e] hover:bg-[#ffd22e]">Start Membership</Button>
      </div>
    </section>
  )
}
