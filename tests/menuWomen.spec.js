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

  test("user is redirected to Women page", async ({ page }) => {
    await page.getByText('Women').click();
    
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women.html');
  })

  test("Women>Bottoms dropdown has items: Pants, Shorts", async ({ page }) => {
    await page.getByText('Women').hover();
    await page.locator('#ui-id-10').hover();

    await expect(page.locator('#ui-id-15')).toBeVisible();
    await expect(page.locator('#ui-id-15')).toHaveText('Pants');

    await expect(page.locator('#ui-id-16')).toBeVisible();
    await expect(page.locator('#ui-id-16')).toHaveText('Shorts');
  })

})  