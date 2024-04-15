import { test, expect } from "@playwright/test";

test.describe('homePage', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    
    test('verify Url on the home page', async({page}) => {
        
        await page.locator('.logo').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com");
    })

    test('goto Yoga Collection page', async({page}) => {
        await page.locator('.block-promo.home-main').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/collections/yoga-new.html");
    })
})