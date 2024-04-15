import { test, expect } from "@playwright/test";

test.describe('Menu/Gear/Promo Block', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const gearNavButton = page.locator('#ui-id-6');
    await gearNavButton.click();
  })

  test('TC 04.4.3_01 Verify redirect to the "Fitness Equipment" page by clicking on "Loosen Up" block', async ({ page }) => {

    await page.getByRole('link', { name: 'Loosen Up' }).click();

    await expect(page).toHaveURL(/.*fitness-equipment.html/);
    await expect(page.locator('.base')).toHaveText('Fitness Equipment');
  })

  test('TC 04.4.3_02 Verify redirect to the "Fitness Equipment" page by clicking on “$4 Luma water bottle. Promo code H2O” block', async ({ page }) => {

    await page.locator('.block-promo.gear-equipment').click();

    await expect(page).toHaveURL(/.*fitness-equipment.html/);
    await expect(page.locator('.base')).toHaveText('Fitness Equipment');

})

})  