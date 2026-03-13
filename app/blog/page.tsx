export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import { Card } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const posts = [
  {
    slug: "monthly-update-april-2026",
    title: "Monthly Update: April 2026 — Spring Green Open + New Ladder Round",
    date: "2026-04-01",
    excerpt:
      "Registration windows, ladder pairing rules, and what’s new at the clubhouse this month.",
  },
  {
    slug: "serve-plus-one-drills",
    title: "3 Serve +1 Drills to Win More Short Points",
    date: "2026-03-01",
    excerpt:
      "Targets, first-ball decisions, and how to practice under pressure.",
  },
  {
    slug: "doubles-positioning-basics",
    title: "Doubles Positioning: The 4 Cues That Fix Most Points",
    date: "2026-02-01",
    excerpt:
      "Spacing, split-step timing, and when to poach without guessing.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <HeroAurora
          badge="Club Journal"
          title="Club journal"
          subtitle="Monthly updates, training tips, and event recaps—built for members and the local tennis community."
          primaryCta={{ label: "Read Latest Post", href: "/blog/monthly-update-april-2026" }}
          secondaryCta={{ label: "Subscribe", href: "/newsletter" }}
        />
      </div>

      <section className="py-20 md:py-28 bg-muted/30 animate-fade-in-up">
        <div className="container mx-auto max-w-7xl px-4 grid gap-6 md:gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="card-hover rounded-xl border border-border bg-card/70 p-6 md:p-8">
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:scale-105"
              >
                Read Article
              </a>
            </Card>
          ))}
        </div>
      </section>

      <div className="animate-fade-in-up">
        <CTASection />
      </div>
    </main>
  );
}
