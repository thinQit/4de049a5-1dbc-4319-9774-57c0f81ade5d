import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 space-y-4">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-64 w-full" />
      </div>
    </main>
  );
}
