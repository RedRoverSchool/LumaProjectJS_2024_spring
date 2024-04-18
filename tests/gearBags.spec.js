import { test, expect } from "@playwright/test";

test.describe("gearBags", () => {
  let materialOption;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    materialOption = page.locator("text=Material");
  });

  test("Verify material sidebar menu option exists", async ({ page }) => {
    page.locator("#ui-id-6").hover();
    await page.locator("#ui-id-25").click();
    await expect(page).toHaveTitle("Bags - Gear");

    await expect(materialOption).toBeVisible();
  });

  test("Verify user can choose a bag by material", async ({ page }) => {
    page.locator("#ui-id-6").hover();
    await page.locator("#ui-id-25").click();
    await expect(page).toHaveTitle("Bags - Gear");
    await materialOption.click();
    const materialMenu = await page.locator(
      "ol.items > li.item > a:has-text(' Polyester ')",
      { timeout: 50000 } // Increase timeout value as needed
    );
    materialMenu.click();
    await expect(
      page.locator('.filter-value:has-text("Polyester")')
    ).toBeVisible();
  });
});
