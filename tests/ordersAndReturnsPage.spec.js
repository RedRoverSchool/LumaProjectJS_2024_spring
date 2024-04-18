import { test, expect } from "@playwright/test"

test.describe('orders and returns page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
    })

    test('TC 02.4.2_01 | Verify Orders and Returns header visibility', async ({page}) => {
        await page.locator('.page-wrapper footer li:has-text("Orders and Returns")').click();

        await expect(page.locator("h1")).toHaveText("Orders and Returns");
        await expect(page.locator("h1")).toBeVisible();
    })
})