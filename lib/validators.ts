import { z } from "zod";

export const contactTopics = [
  "MEMBERSHIP",
  "COACHING",
  "EVENTS",
  "CORPORATE_SCHOOL_BOOKING",
  "FEEDBACK",
] as const;

export const membershipPlans = ["SOCIAL", "PLAYER", "FAMILY"] as const;
export const playingLevels = ["BEGINNER", "IMPROVER", "INTERMEDIATE", "ADVANCED", "COMPETITIVE"] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  topic: z.enum(contactTopics),
  message: z.string().trim().min(10).max(2000),
});

export const membershipSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  plan: z.enum(membershipPlans),
  playingLevel: z.enum(playingLevels),
  preferredTimes: z.array(z.string().trim().min(1).max(80)).max(8).optional().default([]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
  name: z.string().trim().min(1).max(120).optional().or(z.literal("")),
});

export const eventRegistrationSchema = z.object({
  eventSlug: z.string().trim().min(2).max(120),
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});
