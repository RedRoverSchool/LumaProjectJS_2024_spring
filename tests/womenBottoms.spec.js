import { test, expect } from "@playwright/test";

test.describe('Women bottoms page', () => {
    const BASE_URL = 'https://magento.softwaretestingboard.com';

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('TC 05.2.1_01 Redirection to the Women/Bottoms page after clicking the “Bottoms” droplist category.', async ({ page }) => {
        await page.getByText('Women').hover();
        await page.locator('#ui-id-10').click();

        await expect(page).toHaveURL(BASE_URL + '/women/bottoms-women.html');
        await expect(page).toHaveTitle('Bottoms - Women');
    })

    test('TC 05.2.1_02 Breadscrumbs "Home > Women > Bottoms" is displayed on the page', async ({ page }) => {
        await page.getByText('Women').hover();
        await page.locator('#ui-id-10').click();
    
        await expect(page.locator('.breadcrumbs')).toHaveText('Home Women Bottoms');
    })
})