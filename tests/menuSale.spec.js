import { test, expect} from "@playwright/test"; 
test.describe('menuSale', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('TC 04.6.1_01 Redirect To The Sale Page', async ({ page }) => {

        await page.locator('#ui-id-8').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/sale.html');
        await expect(page.locator('#page-title-heading')).toBeVisible();
    })
});