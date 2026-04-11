"use client";

import { render, screen } from "@testing-library/react";
import { Reviews } from "@/components/home/Reviews";
import { homeContent } from "@/data/home-content";

describe("Reviews", () => {
  it("renders only the rotating featured review section without the repeated lower grid", () => {
    render(<Reviews content={homeContent.reviews} />);

    expect(screen.getAllByText("★★★★★")).toHaveLength(1);
    expect(screen.queryByText("Иван К.")).not.toBeInTheDocument();
  });
});
