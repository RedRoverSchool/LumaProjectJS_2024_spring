import { test, expect } from "@playwright/test";
test.describe('Menu/Men', () => {
    const BASE_URL = 'https://magento.softwaretestingboard.com'
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // await page.locator('#ui-id-5').click()
    })

    test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
        await page.getByRole('menuitem', {name: 'Men'}).last().click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
        await expect(page.locator('.page-title')).toContainText('Men');
        await expect(page.locator('[role="heading"]').first()).toBeVisible('Compare Products');
        await expect(page.locator('[role="heading"]').nth(1)).toBeVisible('My Wish List');
    })
})