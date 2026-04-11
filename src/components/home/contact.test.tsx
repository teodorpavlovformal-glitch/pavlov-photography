"use client";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Contact } from "@/components/home/Contact";
import { homeContent } from "@/data/home-content";

describe("Contact", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("posts to Formspree, disables submit while pending, and shows a success message", async () => {
    const user = userEvent.setup();
    let resolveRequest: ((value: Response) => void) | undefined;

    const fetchMock = vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveRequest = resolve;
        }),
    );

    vi.stubGlobal("fetch", fetchMock);

    render(<Contact content={homeContent.contact} />);

    await user.type(screen.getByLabelText("Име"), "Иван Петров");
    await user.type(screen.getByLabelText("Телефон"), "0888 123 456");
    await user.selectOptions(screen.getByLabelText("Тип заснемане"), "Автомобили");
    await user.type(screen.getByLabelText("Съобщение"), "Търся премиум автомобилна фотосесия.");

    const submitButton = screen.getByRole("button", { name: "Изпрати запитване" });
    await user.click(submitButton);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/mnjoooke",
      expect.objectContaining({
        method: "POST",
        headers: { Accept: "application/json" },
        body: expect.any(FormData),
      }),
    );
    expect(submitButton).toBeDisabled();

    resolveRequest?.(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Запитването беше изпратено успешно/i),
      ).toBeInTheDocument();
    });
  });

  it("shows a Bulgarian retry message when Formspree rate limits the request", async () => {
    const user = userEvent.setup();

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ errors: [] }), {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );

    render(<Contact content={homeContent.contact} />);

    await user.type(screen.getByLabelText("Име"), "Иван Петров");
    await user.type(screen.getByLabelText("Телефон"), "0888 123 456");
    await user.selectOptions(screen.getByLabelText("Тип заснемане"), "Автомобили");
    await user.type(screen.getByLabelText("Съобщение"), "Търся премиум автомобилна фотосесия.");
    await user.click(screen.getByRole("button", { name: "Изпрати запитване" }));

    await waitFor(() => {
      expect(
        screen.getByText(/Твърде много изпратени запитвания/i),
      ).toBeInTheDocument();
    });
  });
});
