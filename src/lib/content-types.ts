export type ServiceCategory = "real-estate" | "automotive" | "products";
export type ServiceSlug = ServiceCategory | "videography";

export type PortfolioCategory =
  | "all"
  | "real-estate"
  | "automotive"
  | "products"
  | "video";

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface EditorialTitle {
  lead: string;
  accent: string;
  tail?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceSummaryCard {
  category: ServiceCategory;
  title: string;
  subtitle: string;
  details: string;
}

export interface HeroContent {
  eyebrow: string;
  title: EditorialTitle;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: StatItem[];
  cards: ServiceSummaryCard[];
  availability: string;
}

export interface AboutContent {
  eyebrow: string;
  title: EditorialTitle;
  paragraphs: string[];
  bulletPoints: string[];
  stats: StatItem[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface PackagePlan {
  name: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export interface ServiceTab {
  category: ServiceCategory;
  label: string;
  description: string;
  plans: PackagePlan[];
}

export interface ServicesContent {
  eyebrow: string;
  title: EditorialTitle;
  description: string;
  tabs: ServiceTab[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface VideoUseCase {
  title: string;
  description: string;
}

export interface VideographyContent {
  eyebrow: string;
  title: EditorialTitle;
  description: string;
  price: string;
  features: FeatureCard[];
  useCases: VideoUseCase[];
  included: string[];
  ctaLead: string;
  ctaButton: string;
}

export interface PortfolioItem {
  id: string;
  category: Exclude<PortfolioCategory, "all">;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  ratio: "portrait" | "landscape" | "square";
  isVideo?: boolean;
}

export interface PortfolioProjectFact {
  label: string;
  value: string;
}

export interface PortfolioProjectDetail extends PortfolioItem {
  slug: string;
  eyebrow: string;
  summary: string;
  brief: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  facts: PortfolioProjectFact[];
}

export interface PortfolioContent {
  eyebrow: string;
  title: EditorialTitle;
  description: string;
  filters: { value: PortfolioCategory; label: string }[];
  items: PortfolioItem[];
  beforeAfter: {
    title: EditorialTitle;
    description: string;
    beforeImage: string;
    afterImage: string;
    alt: string;
  };
}

export interface TermItem {
  icon: string;
  title: string;
  description: string;
}

export interface TermsContent {
  eyebrow: string;
  title: EditorialTitle;
  items: TermItem[];
}

export interface ReviewItem {
  quote: string;
  author: string;
  role: string;
}

export interface ReviewsContent {
  eyebrow: string;
  title: EditorialTitle;
  featured: ReviewItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow: string;
  title: EditorialTitle;
  items: FaqItem[];
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactContent {
  eyebrow: string;
  title: EditorialTitle;
  description: string;
  details: ContactDetail[];
  availability: string;
  serviceOptions: string[];
  email: string;
  phone: string;
  formEndpoint: string;
}

export interface FooterCtaContent {
  title: string;
  subtitle: string;
  button: string;
}

export interface AboutPageContent {
  hero: {
    eyebrow: string;
    title: EditorialTitle;
    description: string;
    supportingText: string;
  };
  story: string[];
  values: string[];
  stats: StatItem[];
  process: ProcessStep[];
  philosophy: {
    title: string;
    paragraphs: string[];
  };
  coverage: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export interface ServiceHubCard {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  summary: string;
  audience: string;
  startingPrice: string;
  highlights: string[];
}

export interface ServicesHubContent {
  hero: {
    eyebrow: string;
    title: EditorialTitle;
    description: string;
  };
  cards: ServiceHubCard[];
  proofStats: StatItem[];
  packageNotes: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export interface ServicePageContent {
  slug: ServiceSlug;
  navLabel: string;
  startingPrice: string;
  hero: {
    eyebrow: string;
    title: EditorialTitle;
    summary: string;
    audience: string;
    outcome: string;
    startingPrice: string;
    image: string;
    alt: string;
  };
  highlights: string[];
  included: string[];
  workflow: ProcessStep[];
  packages: PackagePlan[];
  relatedPortfolioSlugs: string[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export interface HomeContent {
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  videography: VideographyContent;
  portfolio: PortfolioContent;
  terms: TermsContent;
  reviews: ReviewsContent;
  faq: FaqContent;
  contact: ContactContent;
  footerCta: FooterCtaContent;
}
