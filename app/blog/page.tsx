export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import BlogPostCard from "@/components/BlogPostCard";
import CTASection from "@/components/CTASection";

export default function BlogPage() {
  const posts = [
    {
      title: "March Calendar: Ladder Nights, Mixed Doubles, and Junior Clinic",
      date: "2026-03-01",
      excerpt:
        "This month’s schedule plus registration links and match-day reminders.",
      slug: "march-calendar-ladder-mixed-junior",
    },
    {
      title: "3 Serve Targets to Improve Your First-Serve Percentage",
      date: "2026-02-01",
      excerpt:
        "Simple targets you can practice in 20 minutes to reduce double faults and start points stronger.",
      slug: "serve-targets-first-serve-percentage",
    },
    {
      title: "Court Etiquette: Warm-ups, Changeovers, and Keeping Play Moving",
      date: "2026-01-01",
      excerpt:
        "A quick guide to match flow and good club culture—especially during busy hours.",
      slug: "court-etiquette-warmups-changeovers",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
