import { test, expect } from '@playwright/test';

test.describe('menuMen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
  test("Selection the men's bottom section", async ({ page }) => {
    page.getByRole('menuitem', { name: ' Men' }).hover();
    page.locator('#ui-id-18').click();

    await expect(page.locator('//span[@data-ui-id="page-title-wrapper" and text()= "Bottoms"]') ).toHaveText('Bottoms');
    await expect(page).toHaveURL( 'https://magento.softwaretestingboard.com/men/bottoms-men.html');
  })
   test ('Verify navigation from the menu to page Men', async ({page}) => {
        await page.getByRole('menuitem', { name: 'Men' }).last().click();
      
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
        await expect(page.getByRole('heading', { name: 'Men'})).toBeVisible();
    })
})


