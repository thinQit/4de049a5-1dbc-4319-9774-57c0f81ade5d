"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

interface TeamGridProps {
  headline?: string;
  subheadline?: string;
  members?: TeamMember[];
}

export default function TeamGrid({
  headline = "Our Coaches",
  subheadline = "Meet Anand Tennis Club's leadership and coaching team.",
  members = [],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{headline}</h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border bg-card p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center">
                <Image
                  src={m.imageUrl}
                  alt={`Photo of ${m.name}, ${m.title}`}
                  width={128}
                  height={128}
                  className="mx-auto mb-5 h-32 w-32 rounded-full object-cover shadow-inner border"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-bold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.title}</p>
              <p className="mt-3 text-sm">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
