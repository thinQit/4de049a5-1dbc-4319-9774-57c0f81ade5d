import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl p-6 md:p-10 space-y-6">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-5/6" />
      <Skeleton className="h-80 w-full" />
    </main>
  )
}
