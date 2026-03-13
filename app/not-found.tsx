import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <h2 className="text-4xl font-bold">Page not found</h2>
      <p className="mt-3 text-muted-foreground">The page you’re looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
