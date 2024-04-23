import { test, expect } from '@playwright/test';

test.describe('womenBottomsFilterSize', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
  test('On the page Bottoms - Womens page there are 5 options for sizes 28, 29, 30, 31, 32.', async ({page}) => {
    const sizes = ['28', '29', '30', '31', '32']
    await page.locator('#ui-id-4').hover()
    await page.locator('#ui-id-10').click()
    await page.getByRole('tab', { name: 'Size' }).click()
    const sizesLocators = page.locator('a[href*="women/bottoms-women.html?size"]>div')

    for (let index = 0; index < sizes.length; index++) {
        await expect(sizesLocators.nth(index)).toHaveText(sizes[index])
    }
    expect(await sizesLocators.count()).toBe(5)
  })
})