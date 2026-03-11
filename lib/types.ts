export interface NavItem {
  label: string;
  href: string;
  items?: NavItem[];
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface EventItem {
  id?: string;
  date: string;
  time: string;
  title: string;
  description: string;
  location?: string;
  tag?: string;
  cta: CtaLink;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}
