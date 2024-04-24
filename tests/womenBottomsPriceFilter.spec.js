import { test, expect } from "@playwright/test";

test.describe('Women/Bottoms/Shopping options/Price', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/women/bottoms-women.html");
    })

    test('Women/Bottoms/Shopping options/Price filter is displayed', async ({ page }) => {
        await page.locator('.filter-options-title').nth(3).click();
    
        await expect(page.locator('.filter-options-content').nth(3)).toBeVisible();
    })
})
