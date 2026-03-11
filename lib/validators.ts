import { z } from "zod";

export const playingLevelSchema = z.enum([
  "BEGINNER",
  "INTERMEDIATE",
  "ADVANCED",
  "JUNIOR",
]);

export const membershipPlanSchema = z.enum([
  "SOCIAL_MEMBER",
  "PLAYER_MEMBER",
  "PERFORMANCE_MEMBER",
]);

export const preferredTimeSchema = z.enum([
  "EARLY_MORNING",
  "MORNING",
  "EVENING",
  "LATE_EVENING",
]);

export const contactTopicSchema = z.enum([
  "MEMBERSHIP",
  "COACHING",
  "EVENTS",
  "TRIAL_SESSION",
  "FEEDBACK",
  "OTHER",
]);

export const contactCreateSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  topic: contactTopicSchema,
  message: z.string().min(10).max(5000),
});

export const membershipApplicationCreateSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().min(8).max(20),
  playingLevel: playingLevelSchema,
  preferredPlan: membershipPlanSchema,
  preferredTime: preferredTimeSchema,
  notes: z.string().max(2000).optional().or(z.literal("")),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().min(2).max(120).optional().or(z.literal("")),
  playingLevel: playingLevelSchema.optional(),
});

export const eventRegisterSchema = z.object({
  eventId: z.string().cuid(),
});
