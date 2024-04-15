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

  test("Women>Tops dropdown has items: Jackets, Hoodies & Sweatshirts, Tees, Bras & Tanks", async ({ page }) => {
    await page.getByText('Women').hover();
    await page.locator('#ui-id-9').hover();

    await expect(page.locator('#ui-id-11')).toBeVisible();
    await expect(page.locator('#ui-id-11')).toHaveText('Jackets');

    await expect(page.locator('#ui-id-12')).toBeVisible();
    await expect(page.locator('#ui-id-12')).toHaveText('Hoodies & Sweatshirts');

    await expect(page.locator('#ui-id-13')).toBeVisible();
    await expect(page.locator('#ui-id-13')).toHaveText('Tees');
    
    await expect(page.locator('#ui-id-14')).toBeVisible();
    await expect(page.locator('#ui-id-14')).toHaveText('Bras & Tanks');  
  })

})  