import { test, expect } from '@playwright/test';

test.describe('menTopsDisplayMode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
test("Checking that the grid is selected and has 12 positions by default", async ({ page }) => {
    await page.locator('#ui-id-5').hover();
    await page.locator('#ui-id-17').click();

    await expect(page.locator('strong[title="Grid"]').first()).toHaveClass(/active/)
    await expect(page.locator('li[class = "item product product-item"]')).toHaveCount(12)
    await expect(page.locator('#maincontent').getByRole('paragraph')).toHaveText('Items 1-12 of 48')
  })
})