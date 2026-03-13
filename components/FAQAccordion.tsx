"use client";

import { Card } from '@/components/ui/card'

interface FaqItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items?: FaqItem[]
}

export default function FAQAccordion({
  items = [
    { question: 'Do I need tournament experience to join?', answer: 'No. We offer beginner to elite programs and will place you based on a quick skills assessment.' },
    { question: 'How often are events updated?', answer: 'New events and coaching blocks are published monthly.' },
    { question: 'Can juniors and adults train together?', answer: 'Programs are split by age and level, with selected mixed clinics for tactical play.' },
    { question: 'Is there a trial session available?', answer: 'Yes, one paid trial session is available before selecting a membership plan.' },
  ],
}: Partial<FAQAccordionProps>) {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mb-8 text-center font-syne text-3xl font-bold text-white md:text-5xl">FAQ</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.question} className="rounded-xl border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
