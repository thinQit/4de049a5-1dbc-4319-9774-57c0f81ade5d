"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  headline?: string;
  subheadline?: string;
  contactInfo?: { icon: string; label: string; value: string }[];
}

const topicOptions = [
  "Membership",
  "Coaching",
  "Events",
  "Trial session",
  "Feedback",
  "Other",
];

export default function ContactForm({
  headline = "Contact us",
  subheadline = "Send us your inquiry. We reply within 1–2 days.",
}: Partial<ContactFormProps>) {
  const [state, setState] = useState<"idle" | "success" | "error" | "submitting">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    const data = new FormData(e.currentTarget);
    const body = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      topic: data.get("topic"),
      message: data.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setState("success");
      } else {
        const err = await res.json();
        setErrorMsg(err?.error || "Submission error");
        setState("error");
      }
    } catch {
      setErrorMsg("Unable to submit. Try again later.");
      setState("error");
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-xl px-4">
        <h2 className="text-2xl font-bold mb-1">{headline}</h2>
        <p className="mb-8 text-muted-foreground">{subheadline}</p>
        <form
          className="space-y-4 rounded-xl border p-6 bg-card"
          onSubmit={handleSubmit}
          aria-busy={state === "submitting"}
        >
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" name="fullName" required autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" required type="email" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="topic">Topic</Label>
            <select
              id="topic"
              name="topic"
              required
              className="block mt-1 rounded-md border px-3 py-2 w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select topic
              </option>
              {topicOptions.map((opt) => (
                <option key={opt} value={opt.toUpperCase().replace(/\s+/g, "_")}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              minLength={10}
              maxLength={5000}
              required
              placeholder="Tell us what you’re looking for and your preferred time to play."
            />
          </div>
          <Button
            className="bg-[#0f3d2e] hover:bg-[#15553f] w-full"
            type="submit"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "Sending..." : "Submit"}
          </Button>
          {state === "success" && (
            <p className="text-green-600 text-sm">Thanks for contacting Anand Tennis Club. We’ll get back to you shortly.</p>
          )}
          {state === "error" && (
            <p className="text-red-600 text-sm">{errorMsg || "Something went wrong. Please try again."}</p>
          )}
        </form>
      </div>
    </section>
  );
}
