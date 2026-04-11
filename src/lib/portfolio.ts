import { portfolioProjects } from "@/data/portfolio-projects";
import type { PortfolioCategory, PortfolioProjectDetail } from "@/lib/content-types";

const categoryLabelMap: Record<Exclude<PortfolioCategory, "all">, string> = {
  "real-estate": "Недвижими имоти",
  automotive: "Автомобили",
  products: "Продукти",
  video: "Видео",
};

export { portfolioProjects };

export function getPortfolioArchivePath() {
  return "/portfolio";
}

export function getPortfolioItemPath(item: Pick<PortfolioProjectDetail, "slug">) {
  return `${getPortfolioArchivePath()}/${item.slug}`;
}

export function getPortfolioItemBySlug(slug: string) {
  return portfolioProjects.find((item) => item.slug === slug);
}

export function getPortfolioCategoryLabel(category: Exclude<PortfolioCategory, "all">) {
  return categoryLabelMap[category];
}

export function getRelatedPortfolioItems(slug: string, limit = 3) {
  const current = getPortfolioItemBySlug(slug);

  if (!current) {
    return [];
  }

  const sameCategory = portfolioProjects.filter(
    (item) => item.slug !== slug && item.category === current.category,
  );

  const otherItems = portfolioProjects.filter(
    (item) => item.slug !== slug && item.category !== current.category,
  );

  return [...sameCategory, ...otherItems].slice(0, limit);
}
