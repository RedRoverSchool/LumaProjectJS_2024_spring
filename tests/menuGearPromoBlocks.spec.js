import { test, expect } from "@playwright/test";

test.describe('Menu/Gear/Promo Block', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test('verify redirect to the "Fitness Equipment" page by clicking on "Loosen Up" block', async ({ page }) => {
    const gearNavButton = page.locator('#ui-id-6');
    await gearNavButton.click();

    await page.getByRole('link', { name: 'Loosen Up' }).click();

    await expect(page).toHaveURL(/.*fitness-equipment.html/);
    await expect(page.getByTestId('page-title-heading')).toHaveText('Fitness Equipment');
  })

})  