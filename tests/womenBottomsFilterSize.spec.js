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
  test('Checking the filter operation when choosing a size', async ({page}) => {
    await page.locator('#ui-id-4').hover()
    await page.locator('#ui-id-10').click()
    await page.getByRole('tab', { name: 'Size' }).click()
    await page.locator('a>div[option-id="175"]').click()

    await expect(page.locator('div[class="block-content filter-content"]>div[data-collapsible="true"]'))
    .toContainText('Now Shopping by Size 32')
    const numberOfCards32Zizes = page.locator('div[class="swatch-option text selected"]')
    for (let index = 0; index < await numberOfCards32Zizes.count(); index++) {
     await expect(numberOfCards32Zizes.nth(index)).toBeChecked()
    }
   })
   test('After clicking the Clear All button and return to the full list of product prices', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/')
    await page.locator('#ui-id-4').hover()
    await page.locator('#ui-id-10').click()
    await page.getByRole('tab', { name: 'Size' }).click()
    await page.locator('a>div[option-id="175"]').click()
    const checkFilterSize = page.locator('div[class="block-content filter-content"]>div[data-collapsible="true"]')
    await expect(checkFilterSize).toContainText('Now Shopping by Size 32')
    await page.getByRole('link', { name: 'Clear All' }).click()

    await expect(checkFilterSize).not.toBeVisible()
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women.html')
  })
})