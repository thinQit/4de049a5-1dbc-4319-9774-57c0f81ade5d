"use client";
import * as React from "react";

interface StatsCounterProps {
  stats?: { value: string; label: string }[];
}

export default function StatsCounter({
  stats = [],
}: StatsCounterProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-8 shadow-sm"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-primary">
                {stat.value}
              </span>
              <p className="mt-2 text-muted-foreground text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
