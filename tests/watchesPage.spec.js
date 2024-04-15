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

    test('verify only sale watches displayed on watches page', async ({ page }) => {
        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await page.getByText('Watches').click();
        await page.waitForLoadState()
        await page.locator('.filter-options .filter-options-title', { hasText: 'Sale' }).click();
        const countSaleItems = await page.locator('.filter-options .active li .count').textContent();
        const totalSaleItems = parseInt(countSaleItems)
        await page.locator('.filter-options .active li a', { hasText: 'Yes' }).click();
        await expect(page).toHaveURL('/gear/watches.html?sale=1');
        const totalItems = await page.locator('.toolbar-products .toolbar-amount .toolbar-number').first()
        const totalNumberItems = await totalItems.textContent();
        expect(totalNumberItems).toContain(totalSaleItems.toString());
    })

    test('Verify only watches on sale displayed on page', async({page})=>{
        await page.getByRole('menuitem', { name: 'Gear' }).hover()
        await page.getByRole('menuitem',{name:'Watches'}).click()
        await page.getByRole('tab',{name:'Sale'}).click()
        await page.getByRole('link',{name:" Yes "}).click()
        const saleItemsNumber = await page.locator('#maincontent').getByRole('paragraph').getByText('2').innerText()
        const saleWatches = (await page.locator('.product-items').getByRole('listitem').count()).toString()
        expect (saleItemsNumber).toEqual(saleWatches)
    })
})
