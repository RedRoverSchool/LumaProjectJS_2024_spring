import { test, expect } from "@playwright/test";

test.describe('menuGearPromoBlocks', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        const gearNavButton = page.locator('#ui-id-6');
        await gearNavButton.click();
    });

    test('Verify redirect to the "Fitness Equipment" category by clicking on "Loosen Up" banner', async ({ page }) => {

        await page.getByRole('link', { name: 'Loosen Up' }).click();

        await expect(page).toHaveURL(/.*fitness-equipment.html/);
        await expect(page.locator('.base')).toHaveText('Fitness Equipment');
    });

    test('Verify redirect to the "Fitness Equipment" category by clicking on “$4 Luma water bottle” banner', async ({ page }) => {

        await page.locator('.block-promo.gear-equipment').click();

        await expect(page).toHaveURL(/.*fitness-equipment.html/);
        await expect(page.locator('.base')).toHaveText('Fitness Equipment');
    });

    test('Verify redirect to the "Bags" category by clicking on "Shop bags" banner', async ({ page }) => {

        await page.locator('.block-promo.gear-category-bags').click();

        await expect(page).toHaveURL(/.*bags.html/);
        await expect(page.locator('.base')).toHaveText('Bags');
    });

    test('Verify redirect to the "Fitness Equipment" category by clicking on "Shop Equipment" banner', async ({ page }) => {

        await page.locator('.block-promo.gear-category-equipment').click();

        await expect(page).toHaveURL(/.*fitness-equipment.html/);
        await expect(page.locator('.base')).toHaveText('Fitness Equipment');
    });

    test('Verify redirect to the "Watches" category by clicking on "Shop watches" banner', async ({ page }) => {

        await page.locator('.block-promo.gear-category-watches').click();

        await expect(page).toHaveURL(/.*watches.html/);
        await expect(page.locator('.base')).toHaveText('Watches');
    });

    test('Verify that 6 promo banners are displayed on "Gear" page', async ({ page }) => {

        await expect(page.locator('div.blocks-promo img')).toHaveCount(6);
    });

});