'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface AuthGateProps {
  children?: ReactNode
  fallbackTitle?: string
  fallbackMessage?: string
  signInHref?: string
}

export default function AuthGate({
  children = null,
  fallbackTitle = 'Members Only',
  fallbackMessage = 'Please sign in to access membership management and private club resources.',
  signInHref = '/api/auth/signin',
}: Partial<AuthGateProps>) {
  const { status } = useSession()

  if (status === 'loading') {
    return (
      <div className="space-y-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-full max-w-md" />
      </div>
    )
  }

  if (status !== 'authenticated') {
    return (
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-black">{fallbackTitle}</h2>
        <p className="mt-2 text-muted-foreground">{fallbackMessage}</p>
        <Button asChild className="mt-5 bg-emerald-700 hover:bg-emerald-800">
          <Link href={signInHref}>Sign In</Link>
        </Button>
      </div>
    )
  }

  return <>{children}</>
}
