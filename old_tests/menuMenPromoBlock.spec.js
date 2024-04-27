import { test, expect } from "@playwright/test";
test.describe('Menu/Men/Promo Block', () => {
    const BASE_URL = 'https://magento.softwaretestingboard.com/men'
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.locator('#ui-id-5').click()
    })

    test('TC 04.3.3_01 Redirect to the "Men/Tops/Tees" page from the "Buy 3 Luma tees, get 4 instead" promo block', async ({ page }) => {

        await page.getByRole('link', { name: 'Save up to $24!' }).click();

        await expect(page).toHaveURL(BASE_URL + '/tops-men/tees-men.html');
        await expect(page.getByRole('heading', { name: 'Tees' })).toBeVisible();
    })

    test('TC 04.3.3_02 Counting promo blocks on the "Men" page', async ({ page }) => {
        
        await expect(page.locator('.block-promo')).toHaveCount(6);
    })
})
