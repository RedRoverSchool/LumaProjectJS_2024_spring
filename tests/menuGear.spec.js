import { test, expect } from "@playwright/test";

test.describe('menuGear', () => {
    const BASE_URL = "https://magento.softwaretestingboard.com";

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
    });

    test('Gear drop-down menu contains: Bags, Fitness equipment, Watches items', async ({ page }) => {
        const gearSubMenu = page.locator('.nav-4.level0 ul');
        const expectedSubMenuItems = ['Bags', 'Fitness Equipment', 'Watches'];
        const actualSubMenuItems = await gearSubMenu.locator('li').allTextContents();

        await page.getByRole('menuitem', { name: 'Gear' }).hover();

        await expect(gearSubMenu).toBeVisible();
        expect(expectedSubMenuItems).toEqual(actualSubMenuItems);
    });

    test('User could navigate from the Gear drop-down menu to Bags page', async ({ page }) => {
        const bagsItem = page.getByRole('menuitem', { name: 'Bags' });
        const bagsPageUrl = '/gear/bags.html';

        await page.getByRole('menuitem', { name: 'Gear' }).hover();

        await expect(bagsItem).toBeVisible();

        bagsItem.click();

        await expect(page).toHaveURL(BASE_URL + bagsPageUrl);
        await expect(page).toHaveTitle('Bags - Gear');
        await expect(page.getByRole('heading', { name: 'Bags' })).toBeVisible();
    });

});