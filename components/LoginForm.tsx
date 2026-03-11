"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  title?: string;
  subtitle?: string;
  showSocialLogin?: boolean;
  showForgotPassword?: boolean;
}

export default function LoginForm({
  title = "Sign in",
  subtitle = "Access your Anand Tennis Club account.",
  showSocialLogin = false,
  showForgotPassword = true,
}: Partial<LoginFormProps>) {
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
    const body = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      // Basic demo - replace with NextAuth sign-in logic
      // Optionally: import { signIn } from "next-auth/react"
      setTimeout(() => {
        setSuccessMsg("Signed in (mock implementation).");
        setState("success");
      }, 900);
    } catch {
      setState("error");
      setErrorMsg("Unable to sign in.");
    }
  }

  return (
    <form
      className="space-y-6 rounded-xl border p-8 bg-card"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required autoComplete="current-password" />
      </div>
      <Button
        className="w-full bg-[#0f3d2e] hover:bg-[#15553f]"
        type="submit"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Signing in..." : "Sign in"}
      </Button>
      {showForgotPassword && (
        <a
          className="block mt-3 text-xs text-primary hover:underline"
          href="#"
          tabIndex={-1}
        >
          Forgot your password?
        </a>
      )}
      {state === "success" && (
        <p className="text-green-600 text-sm mt-2">{successMsg}</p>
      )}
      {state === "error" && (
        <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
      )}
    </form>
  );
}
