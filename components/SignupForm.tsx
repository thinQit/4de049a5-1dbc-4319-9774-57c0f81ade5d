"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SignupFormProps {
  title?: string;
  subtitle?: string;
  showSocialLogin?: boolean;
}

export default function SignupForm({
  title = "Create your Anand Tennis Club account",
  subtitle = "Register for events, manage membership, and access club features.",
  showSocialLogin = false,
}: Partial<SignupFormProps>) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    const data = new FormData(e.currentTarget);
    // Replace with real API or NextAuth sign-up logic
    setTimeout(() => {
      setSuccessMsg("Account created (mock implementation).");
      setState("success");
    }, 900);
  }

  return (
    <form
      className="space-y-6 rounded-xl border p-8 bg-card"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required autoComplete="new-password" />
      </div>
      <Button
        className="w-full bg-[#5B21B6] hover:bg-[#4a1ba0]"
        type="submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Creating..." : "Create Account"}
      </Button>
      {state === "success" && (
        <p className="text-green-600 text-sm mt-2">{successMsg}</p>
      )}
      {state === "error" && (
        <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
      )}
    </form>
  );
}
