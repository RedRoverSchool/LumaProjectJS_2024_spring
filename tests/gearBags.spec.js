import { test, expect } from "@playwright/test";

test.describe("gearBags", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("Verify material sidebar menu option exists", async ({ page }) => {
    page.locator("#ui-id-6").hover();
    await page.locator("#ui-id-25").click();
    await expect(page).toHaveTitle("Bags - Gear");
    const materialOption = page.locator("text=Material");
    await expect(materialOption).toBeVisible();
  });
});
