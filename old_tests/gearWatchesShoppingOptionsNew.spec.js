import { test, expect } from "@playwright/test"; 

test.describe('gearWatchesShoppingOptionsNew', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test ('Apply filter "New"', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        await page.getByRole('tab', {name: 'New'}).click();
            const itemsNew = await page.locator('a[href *= "/watches.html?new=1"]>span.count').allTextContents();
            const nItem = parseInt(itemsNew[0].slice(-6));
        await page.getByRole('link', {name: 'Yes'}).click();
            const itemsAll = await page.locator('li[class="item product product-item"]', ({state: 'attached'})).count();

        expect(nItem).toBe(itemsAll);
    })

    test ('reset filter "new"', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        await page.getByRole('tab', {name: 'New'}).click();
        await page.getByRole('link', {name: 'Yes'}).click();

        await expect(page).toHaveURL(/new/);
        
        await page.getByRole('link', { name: 'Clear All' }).click();

        await expect(page).not.toHaveURL(/new/);
    })
});