import {
  getPortfolioItemBySlug,
  getPortfolioItemPath,
  getRelatedPortfolioItems,
} from "@/lib/portfolio";

describe("portfolio helpers", () => {
  it("finds a project by slug and builds its path", () => {
    const project = getPortfolioItemBySlug("bmw-m-series");

    expect(project?.title).toBe("BMW M Series");
    expect(project ? getPortfolioItemPath(project) : "").toBe("/portfolio/bmw-m-series");
  });

  it("returns related items without including the current project", () => {
    const related = getRelatedPortfolioItems("bmw-m-series");

    expect(related).toHaveLength(3);
    expect(related.some((item) => item.slug === "bmw-m-series")).toBe(false);
    expect(related.some((item) => item.category === "automotive")).toBe(true);
  });
});
