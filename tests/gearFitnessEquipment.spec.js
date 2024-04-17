import { test, expect } from "@playwright/test";

test.describe('page gear', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    })

    test('should navigate to fitness equipment page', async ({ page}) => {

        const gearPageURL = 'https://magento.softwaretestingboard.com/gear.html';

        await page.goto(gearPageURL);
        await expect(page).toHaveURL(gearPageURL);

        await page.locator('#narrow-by-list2 > dd > ol > li:nth-child(2) > a').click();
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/gear/fitness-equipment.html')
    })
})