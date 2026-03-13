export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  level: string;
  price: string;
  capacity: number;
  location: string;
  description: string;
  cta: CTA;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
}

export interface MembershipApplication {
  fullName: string;
  email: string;
  phone: string;
  membershipPlan: string;
  playingLevel: string;
  goals: string;
  preferredStartDate?: string;
  consent: boolean;
}

export interface NewsletterSubscription {
  email: string;
  interests?: string[];
  consent: boolean;
}
