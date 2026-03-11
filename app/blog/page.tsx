export const dynamic = 'force-dynamic';

import HeroSection from "@/components/HeroSection";
import BlogPostCard from "@/components/BlogPostCard";
import CTASection from "@/components/CTASection";

export default function BlogPage() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl grid gap-6 md:gap-8 md:grid-cols-3 px-4">
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
