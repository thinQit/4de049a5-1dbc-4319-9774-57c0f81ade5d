"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors",
        variant === "default" &&
          "bg-accent text-accent-foreground border-transparent",
        variant === "secondary" &&
          "bg-muted text-muted-foreground border-transparent",
        variant === "outline" &&
          "bg-transparent text-foreground border-border",
        className
      )}
      {...props}
    />
  );
}
