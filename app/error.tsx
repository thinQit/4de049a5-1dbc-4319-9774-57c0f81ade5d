"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <h2 className="text-3xl font-bold">Something went wrong</h2>
      <p className="mt-3 text-muted-foreground max-w-xl">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
