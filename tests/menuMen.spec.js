import { test, expect } from '@playwright/test';

test.describe('menuMen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
   test ('Verify navigation from the menu to page Men', async ({page}) => {
        await page.getByRole('menuitem', { name: 'Men' }).last().click();
      
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
        await expect(page.getByRole('heading', { name: 'Men'})).toBeVisible();
    })
})


