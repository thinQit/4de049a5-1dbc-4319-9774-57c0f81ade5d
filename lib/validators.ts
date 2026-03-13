import { z } from "zod";

export const membershipSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  plan: z.string().min(1, "Select a membership plan."),
  playingLevel: z.string().min(1, "Select a playing level."),
  preferredTimes: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  name: z.string().optional(),
});
