import { test, expect } from "@playwright/test";

test.describe('watchesPage', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('verify navigation to watches page through gear section', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await expect(page).toHaveURL('/gear/watches.html');
        await page.waitForSelector('h1:has-text("Watches")');
    })

    test('verify only watches displayed on watches page', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.waitForSelector('.products .product-items li');
        const allTextItems = await page.locator('.products .product-items .product-item-link').allTextContents();
        for (const item of allTextItems) {
            expect(item).toContain('Watch');
        }
    })
})
