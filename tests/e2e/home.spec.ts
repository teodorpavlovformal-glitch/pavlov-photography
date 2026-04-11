import { expect, test } from "@playwright/test";

test("desktop flow covers anchors, services, gallery, faq, slider, and contact handoff", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 2400 });
  await page.route("https://formspree.io/f/mnjoooke", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Снимки, които/i })).toBeVisible();
  await expect(page.locator("header").getByRole("link", { name: "Контакт" })).toHaveCount(1);
  await expect(page.locator("header").getByText("Теодор Павлов")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Отвори менюто" })).toBeHidden();
  await expect(page.locator("#hero")).not.toContainText("Наличен в София и региона");
  await expect(page.locator("#hero")).not.toContainText("SCROLL");

  await page.getByRole("link", { name: "Запази сесия" }).first().click();
  await expect(page).toHaveURL(/#contact$/);

  await page.goto("/");
  await page.locator("#hero").getByRole("button", { name: /Недвижими имоти/i }).click();
  await expect(
    page.locator("#services").getByRole("tab", { name: "Недвижими имоти" }),
  ).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText("Перфектен за малък апартамент")).toBeVisible();

  await page.locator("#services").getByRole("tab", { name: "Недвижими имоти" }).click();
  await expect(page.getByText("Перфектен за малък апартамент")).toBeVisible();

  await page.getByRole("button", { name: /Продуктови видеа/i }).click();
  await expect(page.getByText(/Кратки product reels/)).toBeVisible();

  await page.locator("#portfolio").scrollIntoViewIfNeeded();
  await expect(page.getByRole("tab", { name: "Видео" })).toHaveCount(0);
  await expect(page.locator("#portfolio")).not.toContainText("Кинематичен тур на апартамент");
  await expect(page.locator("#portfolio")).not.toContainText("Видео сесия за премиум автомобил");

  await page.locator("#portfolio").getByRole("tab", { name: "Автомобили" }).click();
  await expect(page.getByText("2 проекта")).toBeVisible();
  await expect(page.getByRole("button", { name: /BMW M Series/i })).toHaveCount(0);
  await expect(page.getByRole("dialog")).toHaveCount(0);

  const slider = page.getByRole("slider", { name: "Плъзгач преди и след" });
  await slider.focus();
  await page.keyboard.press("ArrowRight");
  await expect(slider).toHaveAttribute("aria-valuenow", "55");
  await expect(page.getByRole("heading", { name: /Преди и/i })).toHaveCount(0);

  await page.getByRole("button", { name: "Включена ли е обработката в цената?" }).click();
  await expect(
    page.getByText(/Стандартната обработка включва светлина, цвят и изправяне/),
  ).toBeVisible();
  await expect(page.locator("#reviews article")).toHaveCount(1);

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.getByLabel("Име").fill("Иван Петров");
  await page.getByLabel("Телефон").fill("0888 123 456");
  await page.getByLabel("Тип заснемане").selectOption("Автомобили");
  await page
    .getByLabel("Съобщение")
    .fill("Търся премиум автомобилна фотосесия за нова обява.");
  await page.getByRole("button", { name: "Изпрати запитване" }).click();

  await expect(page.getByText(/Запитването беше изпратено успешно/i)).toBeVisible();

  const hasHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalScroll).toBeFalsy();
});

test("mobile layout shows drawer navigation and sticky call CTA", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 1200 });
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Обади се сега" })).toBeVisible();

  await page.getByRole("button", { name: "Отвори менюто" }).click();
  await expect(page.locator('a[href="#portfolio"]').last()).toBeVisible();
  await expect(page.locator('a[href="#contact"]').last()).toBeVisible();
});

test("tablet layout keeps the floating call CTA hidden", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1400 });
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Обади се сега" })).toBeHidden();
  await expect(page.locator("body")).toContainText("Снимки, които");
});

test("contact form shows a retry message when Formspree rate-limits the request", async ({ page }) => {
  await page.route("https://formspree.io/f/mnjoooke", async (route) => {
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({ errors: [] }),
    });
  });

  await page.goto("/");
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.getByLabel("Име").fill("Иван Петров");
  await page.getByLabel("Телефон").fill("0888 123 456");
  await page.getByLabel("Тип заснемане").selectOption("Автомобили");
  await page.getByLabel("Съобщение").fill("Тест за rate limit.");
  await page.getByRole("button", { name: "Изпрати запитване" }).click();

  await expect(page.getByText(/Твърде много изпратени запитвания/i)).toBeVisible();
});
