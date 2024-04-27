import { test, expect } from "@playwright/test";

test.describe('Women bottoms page', () => {
    const BASE_URL = 'https://magento.softwaretestingboard.com';

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        if (await page.getByRole("dialog", {name: "This site asks for consent to use your data",}).isVisible()) {
            await page.getByLabel("Consent", { exact: true }).click();
   }
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

    test("Product display mode change in the catalog to List mode", async ({ page }) => {
        await page.goto("/" + "women/bottoms-women.html");
        await page.getByTitle("List").first().click();
        expect(await page.locator("div[class*=products-list]")).toHaveClass(/products-list/);
    });

    test('TC 05.2.1_03 The Shopping options filter has 13 droplist categories on the Women/Bottoms page.', async ({ page }) => {
        await page.goto('/'+'women/bottoms-women.html');
        
        const shoppingOptionsFilter = page.locator('.filter-options>div');
        const textShoppingOptionsFilter = await shoppingOptionsFilter.allInnerTexts();
        const expectedFilter = [
            'CATEGORY',
            'STYLE',
            'SIZE',
            'PRICE',
            'COLOR',
            'MATERIAL',
            'ECO COLLECTION',
            'PERFORMANCE FABRIC',
            'ERIN RECOMMENDS',
            'NEW',
            'SALE',
            'PATTERN',
            'CLIMATE'
        ]
        
        await expect(shoppingOptionsFilter).toHaveCount(13); 
        expect(textShoppingOptionsFilter).toEqual(expectedFilter); 
    })

    test('TC 05.2.1_04 Display mode of products is displayed on the Women/Bottoms page', async ({ page }) => {
        await page.goto('/'+'women/bottoms-women.html');

        await page.getByText('Category').click();
        await page.getByRole('link', {name:'Shorts'}).click();

        await expect(page.getByTitle('Grid').first()).toBeVisible();
        await expect(page.getByTitle('List').first()).toBeVisible();
        await expect(page.locator('#toolbar-amount').first()).toHaveText('12 Items');
        await expect(page.locator('.item.product.product-item')).toHaveCount(12);
    })
})
