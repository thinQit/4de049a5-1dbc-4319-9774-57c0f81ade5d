"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, type = "button", ...props }, ref) => {
    if (asChild) {
      return (
        <span
          className={cn(
            // Pass button style for <a> or other components via asChild
            "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
            className
          )}
        >
          {props.children}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        type={type}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
