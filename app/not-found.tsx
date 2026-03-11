import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 md:px-6 py-20 md:py-28 text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
