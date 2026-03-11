import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
