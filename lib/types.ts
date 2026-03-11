export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface EventItem {
  id?: string;
  date: string;
  time: string;
  title: string;
  description: string;
  tags?: string[];
  cta?: CTA;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: CTA;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface ContactMessageInput {
  fullName: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

export interface MembershipRequestInput {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  playingLevel: string;
  preferredTimes?: string[];
  message?: string;
}

export interface NewsletterSubscriptionInput {
  email: string;
  name?: string;
}
