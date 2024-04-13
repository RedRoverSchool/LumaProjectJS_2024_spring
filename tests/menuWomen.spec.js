import { test, expect } from "@playwright/test";

test.describe("menuWomen", () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test("dropdown for Women has 2 elements Tops and Bottoms", async ({ page }) => {
    await page.getByText('Women').hover();

    await expect(page.locator('#ui-id-9')).toBeVisible();
    await expect(page.locator('#ui-id-10')).toBeVisible();  
  })
})  