"use client";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Faq } from "@/components/home/Faq";
import { homeContent } from "@/data/home-content";

describe("Faq", () => {
  it("toggles aria-expanded and reveals the answer", async () => {
    const user = userEvent.setup();

    render(<Faq content={homeContent.faq} />);

    const button = screen.getByRole("button", {
      name: "Включена ли е обработката в цената?",
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/Стандартната обработка включва светлина, цвят и изправяне/u),
    ).toBeInTheDocument();
  });
});
