import { z } from "zod";

export const membershipPlanSchema = z.enum(["SOCIAL", "STANDARD", "PERFORMANCE"]);
export const playingLevelSchema = z.enum([
  "BEGINNER",
  "IMPROVER",
  "INTERMEDIATE",
  "ADVANCED",
  "COMPETITIVE",
]);

export const inquiryReasonSchema = z.enum([
  "MEMBERSHIP",
  "COACHING",
  "EVENTS",
  "JUNIOR_PROGRAM",
  "CLUB_TOUR",
  "FEEDBACK",
]);

export const registrationCategorySchema = z.enum([
  "MEN_SINGLES",
  "WOMEN_SINGLES",
  "MEN_DOUBLES",
  "WOMEN_DOUBLES",
  "MIXED_DOUBLES",
]);

export const eventTypeSchema = z.enum(["SOCIAL", "TOURNAMENT", "JUNIOR", "COACHING"]);

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  reason: inquiryReasonSchema,
  message: z.string().min(10).max(5000),
  consent: z.literal(true),
});

export const membershipApplySchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(255),
  phone: z.string().min(6).max(30).optional(),
  plan: membershipPlanSchema,
  playingLevel: playingLevelSchema,
  interests: z.array(z.string().min(1).max(100)).max(10).optional().default([]),
  notes: z.string().max(2000).optional(),
  consent: z.literal(true),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().email().max(255),
  interests: z.array(z.string().min(1).max(100)).max(10).optional().default([]),
  consent: z.literal(true),
});

export const eventRegistrationSchema = z.object({
  eventSlug: z.string().min(1).max(120),
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().min(6).max(30).optional(),
  category: registrationCategorySchema,
  level: playingLevelSchema,
  partnerName: z.string().max(120).optional(),
  notes: z.string().max(2000).optional(),
  consent: z.literal(true),
});

export const getEventsQuerySchema = z.object({
  type: eventTypeSchema.optional(),
  upcomingOnly: z
    .string()
    .optional()
    .transform((v) => v !== "false"),
  limit: z
    .string()
    .optional()
    .transform((v) => {
      if (!v) return 50;
      const parsed = Number.parseInt(v, 10);
      if (Number.isNaN(parsed)) return 50;
      return Math.min(Math.max(parsed, 1), 200);
    }),
});
