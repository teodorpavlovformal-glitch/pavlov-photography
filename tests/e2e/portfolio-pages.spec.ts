import { expect, test } from "@playwright/test";

test("portfolio archive and detail pages are reachable", async ({ page }) => {
  await page.goto("/portfolio");

  await expect(page.getByRole("heading", { name: /Портфолио архив/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /BMW M Series/i })).toBeVisible();

  await page.getByRole("link", { name: /BMW M Series/i }).click();

  await expect(page).toHaveURL(/\/portfolio\/bmw-m-series$/);
  await expect(page.getByRole("heading", { name: /BMW M Series/i })).toBeVisible();
  await expect(page.getByText(/Автомобилен showcase/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Обратно към архива/i })).toBeVisible();
});
