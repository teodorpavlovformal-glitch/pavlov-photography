import { expect, test } from "@playwright/test";

test("homepage deep links open the brochure pages", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Повече за мен" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { name: /Кой стои зад кадъра/i })).toBeVisible();

  await page.goto("/");
  await page.getByRole("link", { name: "Разгледай всички услуги" }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("heading", { name: /Услуги/i })).toBeVisible();
});

test("services hub and service detail pages cross-link to portfolio and booking", async ({
  page,
}) => {
  await page.goto("/services");

  await page.getByRole("link", { name: "Недвижими имоти" }).click();
  await expect(page).toHaveURL(/\/services\/real-estate$/);
  await expect(page.getByRole("heading", { name: /Недвижими имоти/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Запази запитване" })).toHaveAttribute(
    "href",
    "/#contact",
  );

  await page.getByRole("link", { name: "Градски апартамент" }).click();
  await expect(page).toHaveURL(/\/portfolio\/real-estate-living$/);
  await expect(page.getByRole("heading", { name: /Градски апартамент/i })).toBeVisible();
});

test("all service detail routes render their core brochure sections", async ({ page }) => {
  const routes = [
    ["/services/real-estate", /Недвижими имоти/i],
    ["/services/automotive", /Автомобили/i],
    ["/services/products", /Продукти/i],
    ["/services/videography", /Видеография/i],
  ] as const;

  for (const [route, heading] of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    await expect(page.getByText("Какво е включено")).toBeVisible();
    await expect(page.getByText("Процес")).toBeVisible();
  }
});

test("service detail pages use the tightened hero copy and centered layout blocks", async ({ page }) => {
  await page.goto("/services/real-estate");
  await expect(page.getByRole("heading", { name: /^Недвижими имоти$/i })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("Недвижими имоти с повече присъствие");
  await expect(page.locator("body")).not.toContainText("Включено");

  await page.goto("/services/automotive");
  await expect(page.locator("body")).not.toContainText(
    "От чисти listing кадри до по-изразени showcase серии, които правят автомобила по-желан още при първия скрол.",
  );

  await page.goto("/services/products");
  await expect(page.getByRole("heading", { name: /Продукти с по-желано излъчване/i })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("Продукти с по-чисто и по-желано излъчване");
});
