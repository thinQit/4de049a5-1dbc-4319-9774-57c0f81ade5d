"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  title?: string;
  subtitle?: string;
  showSocialLogin?: boolean;
  showForgotPassword?: boolean;
  forgotPasswordHref?: string;
  signupHref?: string;
}

export default function LoginForm({
  title = "Sign in",
  subtitle = "Use your email to sign in securely.",
  showSocialLogin = false,
  showForgotPassword = false,
  forgotPasswordHref = "/forgot-password",
  signupHref = "/register",
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // In real scenario: signIn("email", { email })
    setTimeout(() => {
      setIsSuccess(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8")}
      aria-labelledby="login-form-title"
    >
      <h2 id="login-form-title" className="mb-2 text-2xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mb-6 text-white/80">{subtitle}</p>}
      {isSuccess ? (
        <div className="rounded border border-green-600 bg-green-50 p-4 text-green-900">
          Sign-in link sent! Check your email.
        </div>
      ) : (
        <>
          <Label htmlFor="login-email" className="text-white">Email</Label>
          <Input
            id="login-email"
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
        </>
      )}
      <div className="mt-4 flex flex-col gap-2 text-center">
        {showForgotPassword && (
          <a href={forgotPasswordHref} className="text-sm text-white/50 underline hover:text-[#FFD700]">
            Forgot your password?
          </a>
        )}
        <span className="text-sm text-white/70">
          New here? <a href={signupHref} className="underline hover:text-[#FFD700]">Create account</a>
        </span>
      </div>
    </form>
  );
}
