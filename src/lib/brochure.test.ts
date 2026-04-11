import {
  getServicePageBySlug,
  getServicePagePath,
  getServicePortfolioProjects,
  servicePageSlugs,
} from "@/lib/brochure";
import { brochureNavLinks, homeNavLinks } from "@/lib/site-navigation";

describe("brochure content helpers", () => {
  it("exposes the expected home and inner-page navigation models", () => {
    expect(homeNavLinks.some((link) => link.href === "#services")).toBe(true);
    expect(brochureNavLinks.map((link) => link.href)).toEqual(
      expect.arrayContaining([
        "/",
        "/about",
        "/services",
        "/services/videography",
        "/portfolio",
      ]),
    );
  });

  it("returns service page content by slug and builds paths", () => {
    expect(servicePageSlugs).toEqual([
      "real-estate",
      "automotive",
      "products",
      "videography",
    ]);

    const realEstate = getServicePageBySlug("real-estate");
    expect(realEstate?.startingPrice).toBe("€30");
    expect(realEstate?.packages).toHaveLength(3);
    expect(getServicePagePath("videography")).toBe("/services/videography");
  });

  it("maps service pages to real portfolio projects", () => {
    const automotiveProjects = getServicePortfolioProjects("automotive");

    expect(automotiveProjects).toHaveLength(2);
    expect(automotiveProjects.some((project) => project.slug === "bmw-m-series")).toBe(true);
    expect(automotiveProjects.some((project) => project.slug === "porsche-road")).toBe(false);
  });
});
