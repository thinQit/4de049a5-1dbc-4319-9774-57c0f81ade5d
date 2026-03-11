"use client";
import React from "react";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  title?: string;
  headline?: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "What players say",
  subheadline = "Real stories from Anand Tennis Club members.",
  testimonials = [],
  autoplay = true,
  title,
}: Partial<TestimonialsAnimatedProps>) {
  // Simple fallback: basic animated slider, if AnimatedTestimonials is missing
  // For more production use, migrate this to library or your own carousel
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (!autoplay || testimonials.length < 2) return;
    const id = setInterval(() => {
      setIdx((c) => (c + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(id);
  }, [autoplay, testimonials.length]);
  if (!testimonials || testimonials.length === 0) return null;
  const testimonial = testimonials[idx];
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline || title}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-card p-8 text-center shadow-md transition duration-700 ease-in-out animate-fade-in">
          <blockquote className="text-xl italic text-[#0B5D3B] md:text-2xl">"{testimonial.quote}"</blockquote>
          <div className="mt-6 flex flex-col items-center justify-center gap-1">
            <span className="font-semibold text-[#C9A227]">{testimonial.name}</span>
            <span className="text-sm text-muted-foreground">{testimonial.designation}</span>
            {/* Optional image: <img src={testimonial.src} alt={testimonial.name} className="mt-2 h-10 w-10 rounded-full" /> */}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={
                "h-2 w-2 rounded-full transition-all duration-200 " +
                (i === idx
                  ? "bg-[#C9A227] scale-110"
                  : "bg-[#EFE7D6] opacity-50")
              }
              aria-label={`View testimonial ${i + 1}`}
              aria-current={i === idx}
              onClick={() => setIdx(i)}
              style={{ outline: "none", border: 0, padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
