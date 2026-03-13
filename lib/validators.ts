import { z } from "zod";

export const contactInquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  topic: z.enum(["MEMBERSHIP", "EVENTS", "COACHING", "SPONSORSHIP", "FEEDBACK", "OTHER"]),
  message: z.string().trim().min(10).max(3000),
  consent: z.literal(true),
});

export const membershipApplicationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  membershipPlan: z.enum(["STARTER", "CLUB", "PERFORMANCE"]),
  playingLevel: z.enum(["BEGINNER", "LEVEL_30_35", "LEVEL_40", "LEVEL_45_PLUS"]),
  goals: z.string().trim().min(10).max(3000),
  preferredStartDate: z.string().datetime().optional(),
  consent: z.literal(true),
});

export const newsletterSubscribeSchema = z.object({
  email: z.string().trim().email().max(255),
  interests: z
    .array(z.enum(["TOURNAMENTS", "CLINICS", "SOCIAL_DOUBLES", "JUNIOR_PROGRAMS"]))
    .max(8)
    .optional()
    .default([]),
  consent: z.literal(true),
});

export const eventRegisterSchema = z.object({
  eventId: z.string().cuid(),
  partnerName: z.string().trim().min(2).max(120).optional(),
  notes: z.string().trim().max(1000).optional(),
});
