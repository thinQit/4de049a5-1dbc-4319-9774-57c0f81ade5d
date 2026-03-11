"use client";
import * as React from "react";

interface FAQAccordionProps {
  headline?: string;
  subheadline?: string;
  items?: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordion({
  headline = "Frequently Asked Questions",
  subheadline = "Answers to common club queries.",
  items = [],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
        {subheadline && (
          <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
        )}
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-4 px-4">
        {items.map((item, idx) => (
          <div
            key={item.question}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <svg
                className={
                  "h-5 w-5 ml-4 transition-transform duration-200" +
                  (openIndex === idx ? " rotate-180" : "")
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === idx
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
              style={{ gridTemplateRows: openIndex === idx ? "1fr" : "0fr" }}
            >
              <div className="text-sm text-muted-foreground">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
