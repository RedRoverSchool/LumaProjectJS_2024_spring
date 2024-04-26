import { test, expect } from "@playwright/test";

test.describe(" Menu Women Hot Sellers ", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Verify Hot Sellers block exists on the women's page", async ({
    page,
  }) => {
    await page.getByRole("menuitem", { name: "Women" }).click();

    const hotSellersTitle = page.locator("h2.title");
    await expect(hotSellersTitle).toBeVisible();
  });
});
