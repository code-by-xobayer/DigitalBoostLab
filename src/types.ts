export type ServiceCategory = 'web' | 'branding' | 'app';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
}

export interface WorkProject {
  id: string;
  title: string;
  category: 'web' | 'branding' | 'app';
  categoryLabel: string;
  summary: string;
  impactMetric: string;
  fullStory: string;
  client: string;
  year: string;
  deliverables: string[];
  accentColor: string;
  mockupType: 'browser' | 'brand-guideline' | 'android-phone';
}

export interface ProcessStage {
  step: number;
  title: string;
  summary: string;
  duration: string;
  details: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  isFeatured?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budgetRange: string;
  message: string;
}
