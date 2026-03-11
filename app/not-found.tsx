import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 md:p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
