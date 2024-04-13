import { test, expect } from "@playwright/test";

test.describe('homePage', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    
    test('TC03.1.1_01 verify Url on the home page', async({page}) => {
        
        await page.locator('.logo').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com");
    })
})