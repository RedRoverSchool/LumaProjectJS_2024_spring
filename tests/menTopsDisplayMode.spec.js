import { test, expect } from '@playwright/test';

test.describe('menTopsDisplayMode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
test.skip("Checking that the grid is selected and has 12 positions by default", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();

    await expect(page.locator('strong[title="Grid"]').first()).toHaveClass(/active/)
    await expect(page.locator('li[class = "item product product-item"]')).toHaveCount(12)
    await expect(page.locator('#maincontent').getByRole('paragraph')).toHaveText('Items 1-12 of 48')
  })
  test("Checking that the list is selected and has 10 positions by default", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();
    const listLocator = page.locator('a[class="modes-mode mode-list"]').first();
    await page.waitForTimeout(2000); // добавил небольшую задержку
    await listLocator.click();

    await expect(page.locator('strong[title="List"]').first()).toHaveClass(/active/)
    await expect(page.locator('li[class = "item product product-item"]')).toHaveCount(10)
    await expect(page.locator('#maincontent').getByRole('paragraph')).toHaveText('Items 1-10 of 48')
    
  })
})