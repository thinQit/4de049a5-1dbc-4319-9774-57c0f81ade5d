"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SignupFormProps {
  title?: string;
  subtitle?: string;
  showSocialLogin?: boolean;
}

export default function SignupForm({
  title = "Create your member account",
  subtitle = "Register to manage event sign-ups and membership details.",
  showSocialLogin = false,
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate or trigger email registration flow (magic-link).
    // In production: use NextAuth signIn("email", { email })
    setTimeout(() => {
      setIsSuccess(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8")}
      aria-labelledby="signup-form-title"
    >
      <h2 id="signup-form-title" className="mb-2 text-2xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mb-6 text-white/80">{subtitle}</p>}
      {isSuccess ? (
        <div className="rounded border border-green-600 bg-green-50 p-4 text-green-900">
          Check your inbox for a sign-in link!
        </div>
      ) : (
        <>
          <Label htmlFor="register-email" className="text-white">Email</Label>
          <Input
            id="register-email"
            type="email"
            required
            className="mt-2"
            placeholder="you@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            className="mt-6 w-full bg-[#4f46e5]"
            disabled={loading || !email}
          >
            {loading ? "Sending link..." : "Continue with Email"}
          </Button>
          {/* Social login could be implemented here */}
        </>
      )}
      <p className="mt-4 text-sm text-white/60 text-center">
        Already have an account? <a href="/login" className="underline hover:text-[#FFD700]">Sign in</a>
      </p>
    </form>
  );
}
