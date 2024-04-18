import { test, expect} from "@playwright/test"; 
test.describe('menuSaleGear_Deals', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/sale.html");
    })

    test('Title “Gears deals” are located under “Mens deals” section', async ({ page }) => {
        
        const menDealsTitleElement = page.locator('.categories-menu > strong:nth-child(3) > span');
        const gearDealsTitleElement = page.locator('.categories-menu > strong:nth-child(5) > span');

        await expect(menDealsTitleElement).toHaveText('Mens\'s Deals');
        await expect(gearDealsTitleElement).toHaveText('Gear Deals');

    });
});
