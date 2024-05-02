import { test, expect } from "@playwright/test";

test.describe('Body/Block/Promo', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Verify navigation to the Performance Fabrics page', async({page}) => {
        await page.locator('.block-promo.home-performance').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/collections/performance-fabrics.html");
        await expect(page).toHaveTitle('Performance Fabrics');
    })    
   
})    