"use client";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Services } from "@/components/home/Services";
import { homeContent } from "@/data/home-content";

describe("Services", () => {
  it("switches pricing cards when another category tab is selected", async () => {
    const user = userEvent.setup();

    render(<Services content={homeContent.services} />);

    expect(screen.getByText("€20")).toBeInTheDocument();
    await user.click(screen.getByRole("tab", { name: "Недвижими имоти" }));

    expect(screen.getByText("€30")).toBeInTheDocument();
    expect(screen.getByText("Перфектен за малък апартамент")).toBeInTheDocument();
  });
});
