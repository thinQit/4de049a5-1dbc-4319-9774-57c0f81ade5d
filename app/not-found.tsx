import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist on Anand Tennis Club.</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
