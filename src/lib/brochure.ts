import { servicePageContent } from "@/data/brochure-content";
import type { PortfolioProjectDetail, ServicePageContent, ServiceSlug } from "@/lib/content-types";
import { portfolioProjects } from "@/lib/portfolio";

export const servicePageSlugs: ServiceSlug[] = [
  "real-estate",
  "automotive",
  "products",
  "videography",
];

export function getServicePagePath(slug: ServiceSlug) {
  return `/services/${slug}`;
}

export function getServicePageBySlug(slug: string) {
  if (!servicePageSlugs.includes(slug as ServiceSlug)) {
    return undefined;
  }

  return servicePageContent[slug as ServiceSlug];
}

export function getAllServicePages(): ServicePageContent[] {
  return servicePageSlugs.map((slug) => servicePageContent[slug]);
}

export function getServicePortfolioProjects(slug: ServiceSlug): PortfolioProjectDetail[] {
  const page = getServicePageBySlug(slug);

  if (!page) {
    return [];
  }

  return page.relatedPortfolioSlugs
    .map((projectSlug) => portfolioProjects.find((project) => project.slug === projectSlug))
    .filter((project): project is PortfolioProjectDetail => Boolean(project));
}
