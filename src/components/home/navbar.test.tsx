"use client";

import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/home/Navbar";
import { homeNavLinks } from "@/lib/site-navigation";
import { brochureNavLinks } from "@/lib/site-navigation";

describe("Navbar", () => {
  it("resolves brochure navigation links and contact anchor for inner pages", () => {
    render(<Navbar links={brochureNavLinks} rootHrefBase="/" />);

    expect(screen.getByRole("link", { name: "За мен" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Услуги" })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: "Контакт" })).toHaveAttribute("href", "/#contact");
  });

  it("shows a single desktop contact CTA and removes the extra subtitle next to the logo", () => {
    render(<Navbar links={homeNavLinks} />);

    expect(screen.getAllByRole("link", { name: "Контакт" })).toHaveLength(1);
    expect(screen.queryByText("Теодор Павлов")).not.toBeInTheDocument();
  });
});
