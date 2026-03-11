"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    if (asChild) {
      // If asChild is true, the parent (Next.js Link or <a>) should handle rendering
      return (
        <span className={cn("inline-block", className)}>{props.children}</span>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-xl px-6 py-3 font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
