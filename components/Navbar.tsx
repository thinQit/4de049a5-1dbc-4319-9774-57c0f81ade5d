"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  brandName = "Anand Tennis Club",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Club Overview", href: "/club" },
    { label: "Events", href: "/events" },
    { label: "Membership", href: "/membership" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  ctaLabel = "Become a Member",
  ctaHref = "/membership",
}: Partial<NavbarProps>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Trophy className="h-5 w-5 text-accent" />
          <span className="font-semibold tracking-wide">{brandName}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-secondary transition-transform duration-300",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
          <Button asChild className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link href={ctaHref!}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/60 hover:text-foreground",
                    isActive && "bg-muted/80 text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Link href={ctaHref!}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
