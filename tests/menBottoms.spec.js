import { test, expect } from '@playwright/test';

test.describe('menBottoms', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
  test("Selection the men's bottom section", async ({ page }) => {
    await page.getByRole('menuitem', { name: ' Men' }).hover();
    await page.locator('#ui-id-18').click();

    await expect(page.locator('//span[@data-ui-id="page-title-wrapper" and text()= "Bottoms"]') ).toHaveText('Bottoms');
    await expect(page).toHaveURL( 'https://magento.softwaretestingboard.com/men/bottoms-men.html');
  })
})