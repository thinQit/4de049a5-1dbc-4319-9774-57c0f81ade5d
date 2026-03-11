"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "article" | "div";
  role?: string;
}

const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ className, as = "article", role, ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow",
          className
        )}
        role={role || (as === "div" ? "region" : undefined)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
export { Card };
