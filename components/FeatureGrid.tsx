"use client";

import { BadgeCheck, Clock3, Dumbbell, Shield, Sparkles, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureGridProps {
  items?: { icon?: string; title?: string; description?: string }[]
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  BadgeCheck,
  Dumbbell,
  Clock3,
  Shield,
}

export default function FeatureGrid({
  items = [
    { icon: 'BadgeCheck', title: 'Certified Coaches', description: 'ITF-level trainers for all skill levels.' },
    { icon: 'Dumbbell', title: 'Modern Facilities', description: 'Premium courts, gym, and recovery zones.' },
    { icon: 'Clock3', title: 'Flexible Hours', description: 'Daily sessions from sunrise to night.' },
    { icon: 'Shield', title: 'Safe Club Culture', description: 'Community-first guidelines and support.' },
  ],
}: Partial<FeatureGridProps>) {
  // Deprecated, prefer FeaturesGrid. Remove if not used elsewhere.
  return null;
}
