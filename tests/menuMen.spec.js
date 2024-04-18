import { test, expect } from "@playwright/test";
test.describe('Menu/Men', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
        await page.getByRole('menuitem', {name: 'Men'}).last().click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
        await expect(page.locator('.page-title')).toContainText('Men');
        await expect(page.locator('[role="heading"]').first()).toBeVisible('Compare Products');
        await expect(page.locator('[role="heading"]').nth(1)).toBeVisible('My Wish List');
    })
})