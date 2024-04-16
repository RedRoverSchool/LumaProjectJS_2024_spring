import { test, expect } from '@playwright/test';

test.describe('menTops', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
  test("Check that the cards have an image, description, available sizes, colors and price.", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
    const numberOfCards = await page.locator('li[class = "item product product-item"]').count()
  
    for (let index = 0; index < numberOfCards; index++) {
    await expect(page.locator('img.product-image-photo').nth(index)).toBeVisible();
    await expect(page.locator('a.product-item-link').nth(index)).toBeVisible()
    await expect(page.locator('span[data-price-type="finalPrice"]').nth(index)).toHaveText(/\$\d+\.00$/)
    await expect(page.getByRole('listbox',{name:'Size'}).nth(index)).toBeVisible() 
    await expect(page.getByRole('listbox',{name:'Color'}).nth(index)).toBeVisible()
    } 
  })
  test("Go to the page with men's tops", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
 
     await expect(page.locator('.base') ).toHaveText('Tops');
     await expect(page).toHaveURL( 'https://magento.softwaretestingboard.com/men/tops-men.html');
   })
})