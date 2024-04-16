import { test, expect } from '@playwright/test';

test.describe('menuMen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })
   test('Verify navigation from the menu to page Men', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Men' }).last().click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');
    await expect(page.getByRole('heading', { name: 'Men' })).toBeVisible();
   })

   test("Verify the display of comparison products on the men's page", async ({ page }) => {
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByLabel('Email').fill('svetik.buratino@gmail.com');
    await page.getByLabel('Password').fill('User123!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('menuitem', { name: 'Men' }).last().click();

    await page.locator('.products-grid li').first().click();
    await page.getByRole('link', {name:'Add to Compare'}).click();   
    await page.getByRole("menuitem", { name: "Men" }).last().click();

    await expect(page.locator("#block-compare-heading")).toHaveText('Compare Products');

    const countItemsBlockCompare = page.locator('#compare-items li');

    await expect(countItemsBlockCompare).toHaveCount(1);
   });
});
