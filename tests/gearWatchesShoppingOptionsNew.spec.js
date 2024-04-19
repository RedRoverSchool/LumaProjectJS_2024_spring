import { test, expect } from "@playwright/test"; 

test.describe('gearWatchesShoppingOptionsNew', () => {
    const baseURL = 'https://magento.softwaretestingboard.com';
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test ('Apply filter "New"', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-27').click();
        await page.getByRole('tab', {name: 'New'}).click();

        const itemsNew = await page.locator('a[href="https://magento.softwaretestingboard.com/gear/watches.html?new=1"]').innerText()

        await page.getByRole('link', {name: 'Yes'}).click();

        const itemsAll = await page.locator('li[class = "item product product-item"]').count();

        expect(itemsNew).toContain(itemsAll.toString());
    })
});