"use client";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HomePage } from "@/components/home/HomePage";

describe("HomePage", () => {
  it("adds deeper brochure links without replacing the long-form sections", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Повече за мен" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Разгледай всички услуги" })).toHaveAttribute(
      "href",
      "/services",
    );
    expect(screen.getByRole("link", { name: "Детайли за видеография" })).toHaveAttribute(
      "href",
      "/services/videography",
    );
  });

  it("opens the matching pricing tab when a hero category card is clicked", async () => {
    const user = userEvent.setup();

    render(<HomePage />);

    const heroSection = screen.getByRole("heading", { name: /Снимки, които/i }).closest("section");
    const servicesSection = document.getElementById("services");

    expect(heroSection).not.toBeNull();
    expect(servicesSection).not.toBeNull();
    await user.click(within(heroSection!).getByRole("button", { name: /Недвижими имоти/i }));

    expect(within(servicesSection!).getByRole("tab", { name: "Недвижими имоти" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByText("Перфектен за малък апартамент")).toBeInTheDocument();
  });
});
