import { test, expect } from "@playwright/test";

test.describe('verify fitness equipment', () => {
    test('verify navigation path to the fitness equipment', async ({ page }) => {
        await page.goto('/');
        
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };

        await page.locator('a > span:text-is("Gear")').hover();
        await page.locator('ul > li > a> span:text-is("Fitness Equipment")').click();
        await expect(page.locator('ul.items')).toHaveText('Home Gear Fitness Equipment');
    })

    test('change display mode in the Fitnes Equipment section', async ({ page }) => {
        await page.goto('/' + 'gear/fitness-equipment.html');
        
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
        
        await page.locator('#mode-list').first().click();
        await expect(page.locator('.toolbar-amount').nth(1)).toHaveText('Items 1-10 of 11');
        await page.reload();

        await page.locator('#mode-grid').first().click();
        await expect(page.locator('.toolbar-amount').nth(1)).toHaveText('11 Items');
    })
})
