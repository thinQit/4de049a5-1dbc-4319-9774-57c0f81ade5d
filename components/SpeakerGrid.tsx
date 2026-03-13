"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface Speaker {
  name: string
  role: string
  bio: string
  imageSrc: string
  chips: string[]
}

interface SpeakerGridProps {
  title?: string
  speakers?: Speaker[]
}

export default function SpeakerGrid({
  title = 'Meet the Coaching Team',
  speakers = [
    {
      name: 'Elena Novak',
      role: 'Head Performance Coach',
      bio: 'Former ATP conditioning specialist focused on explosive movement and match resilience.',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg',
      chips: ['ATP Experience', 'Elite Conditioning'],
    },
    {
      name: 'Marcus Lee',
      role: 'Technical Director',
      bio: 'Specialist in topspin mechanics and aggressive baseline strategies for advanced players.',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg',
      chips: ['Shot Mechanics', 'Video Analysis'],
    },
    {
      name: 'Sana Kapoor',
      role: 'Junior Development Lead',
      bio: 'Builds high-confidence pathways for youth players transitioning into competitive circuits.',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg',
      chips: ['Youth Programs', 'Mental Game'],
    },
  ],
}: Partial<SpeakerGridProps>) {
  return (
    <section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-10 font-syne text-3xl font-bold text-white md:text-5xl">{title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {speakers.map((s) => (
            <Card key={s.name} className="overflow-hidden rounded-xl border-white/10 bg-white/5">
              <Image src={s.imageSrc} alt={s.name} width={1200} height={800} unoptimized className="h-56 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h3 className="font-syne text-xl font-semibold text-white">{s.name}</h3>
                <p className="text-sm text-[#38bdf8]">{s.role}</p>
                <p className="text-sm text-slate-300">{s.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {s.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-3 py-1 text-xs text-[#86efac]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
