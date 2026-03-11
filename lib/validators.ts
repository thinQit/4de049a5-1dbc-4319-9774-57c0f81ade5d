import { z } from "zod";

export const membershipSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  plan: z.enum(["SOCIAL_MEMBER", "PLAYER_MEMBER", "PERFORMANCE_MEMBER"]),
  playingLevel: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "JUNIOR"]),
  preferredTimes: z
    .array(z.enum(["EARLY_MORNING", "MORNING", "EVENING", "LATE_EVENING"]))
    .optional(),
  message: z.string().optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
  name: z.string().optional(),
});
