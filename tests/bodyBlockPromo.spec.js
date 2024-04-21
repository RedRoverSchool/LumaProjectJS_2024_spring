import { test, expect } from "@playwright/test";
const customTimeout = 30000;

test.describe('Body/Block/Promo', () => {
    
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(customTimeout);
        await page.goto('/');
    })

    test('TC 03.2.1_05 Verify navigation to the Performance Fabrics page', async({page}) => {
        await page.locator('.block-promo.home-performance').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/collections/performance-fabrics.html");
        await expect(page).toHaveTitle('Performance Fabrics');
    })    

    test('TC 03.2.1_04 Verify that Shop Tees link redirects to the corresponding page', async({page}) => {
        await page.locator('.block-promo.home-t-shirts').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/promotions/tees-all.html");
        await expect(page).toHaveTitle('Tees');
    })

    test('TC 03.2.1_03 Verify that Shop Pants link redirects to the corresponding page', async({page}) => {
        await page.locator('.block-promo.home-pants').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/promotions/pants-all.html");
        await expect(page).toHaveTitle('Pants');
    })

    test('TC 03.2.1_02 Verify that “Take it from Erin” image link redirects to the corresponding page', async({page}) => {
        await page.locator('.block-promo.home-erin').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/collections/erin-recommends.html");
        await expect(page).toHaveTitle('Erin Recommends');
    })

    test('TC 03.2.1_01 Verify that "Shop Pants" link redirects to the corresponding page', async({page}) => {
        await page.locator('.block-promo.home-pants').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/promotions/pants-all.html");
        await expect(page).toHaveTitle('Pants');
    })
})    