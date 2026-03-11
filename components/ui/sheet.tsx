"use client";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: "left" | "right" | "top" | "bottom";
}

const SheetContent = React.forwardRef<
  HTMLDivElement,
  SheetContentProps
>(({ className, side = "right", children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 transition-transform bg-background shadow-lg",
        side === "right" && "top-0 right-0 h-full w-80 translate-x-0",
        side === "left" && "top-0 left-0 h-full w-80 -translate-x-0",
        side === "top" && "left-0 top-0 w-full h-1/2 -translate-y-0",
        side === "bottom" && "left-0 bottom-0 w-full h-1/2 translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...props} />
);
const SheetTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <h2
    className={cn(
      "text-lg font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
};
