"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Something went wrong at Anand Tennis Club</h1>
        <p className="text-muted-foreground">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </main>
  );
}
