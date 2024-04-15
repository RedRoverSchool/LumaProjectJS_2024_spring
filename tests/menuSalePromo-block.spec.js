import { test, expect } from "@playwright/test";

test.describe("menuSalePromo-block", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/" + "sale.html");
  });

  test("Verify 'Sale' page contains 6 promo-blocks as images", async ({ page }) => {
    const promoBlocks = page.locator("div.blocks-promo img");

    expect(promoBlocks).toHaveCount(6);
  });
})