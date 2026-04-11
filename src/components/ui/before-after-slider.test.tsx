"use client";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

describe("BeforeAfterSlider", () => {
  it("responds to keyboard arrows on the slider handle", async () => {
    const user = userEvent.setup();

    render(
      <BeforeAfterSlider
        beforeLabel="Преди"
        afterLabel="След"
        beforeImage={{
          src: "https://images.unsplash.com/photo-before",
          alt: "Преди обработка",
        }}
        afterImage={{
          src: "https://images.unsplash.com/photo-after",
          alt: "След обработка",
        }}
      />,
    );

    const slider = screen.getByRole("slider", { name: "Плъзгач преди и след" });
    expect(slider).toHaveAttribute("aria-valuenow", "50");

    slider.focus();
    await user.keyboard("{ArrowRight}{ArrowRight}");

    expect(slider).toHaveAttribute("aria-valuenow", "60");
  });
});
