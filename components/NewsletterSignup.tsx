"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const playingLevelOptions = [
  { label: "Beginner", value: "BEGINNER" },
  { label: "Intermediate", value: "INTERMEDIATE" },
  { label: "Advanced", value: "ADVANCED" },
  { label: "Junior", value: "JUNIOR" },
];

interface NewsletterSignupProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
}

export default function NewsletterSignup({
  headline = "Subscribe",
  subheadline = "Monthly club updates and coaching tips.",
  ctaLabel = "Subscribe",
}: Partial<NewsletterSignupProps>) {
  const [state, setState] = useState<"idle" | "success" | "error" | "submitting">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setState("submitting");
    const data = new FormData(e.currentTarget);
    const body: Record<string, string> = {
      email: data.get("email") as string,
      name: (data.get("name") as string) || "",
      playingLevel: (data.get("playingLevel") as string) || "",
    };
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setState("success");
      } else {
        const err = await res.json();
        setErrorMsg(err?.error || "Subscription failed. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Subscription failed. Please try again.");
      setState("error");
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-lg px-4">
        <h2 className="text-2xl font-bold mb-1">{headline}</h2>
        <p className="mb-8 text-muted-foreground">{subheadline}</p>
        <form
          className="space-y-4 rounded-xl border p-6 bg-card"
          onSubmit={handleSubmit}
          aria-busy={state === "submitting"}
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" required type="email" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="name">Name (optional)</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="playingLevel">Playing level (optional)</Label>
            <select
              id="playingLevel"
              name="playingLevel"
              className="block mt-1 rounded-md border px-3 py-2 w-full"
              defaultValue=""
            >
              <option value="">Choose level</option>
              {playingLevelOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            className="bg-[#5B21B6] hover:bg-[#4a1ba0] w-full"
            type="submit"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "Subscribing..." : ctaLabel}
          </Button>
          {state === "success" && (
            <p className="text-green-600 text-sm">You’re subscribed to the Anand Tennis Club newsletter.</p>
          )}
          {state === "error" && (
            <p className="text-red-600 text-sm">{errorMsg || "Subscription failed. Please try again."}</p>
          )}
        </form>
        <p className="mt-4 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
