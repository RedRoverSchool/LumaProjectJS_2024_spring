import { test, expect } from "@playwright/test";

test.describe('Women/Bottoms/Style', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify the changes to the menuitem "Women" style when hover', async ({ page }) => {
    const wonenMenu = page.locator('a#ui-id-4');
    await page.getByRole('menuitem', {name: 'Women'}).hover();

    await expect(wonenMenu).toHaveClass(/ui-state-focus/);
    await expect(wonenMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('menuitem', {name: 'Tops'})).toBeVisible();
    await expect(page.getByRole('menuitem', {name: 'Bottoms'})).toBeVisible();
  });

  test('Verify the changes to the menuitem "Bottoms" style when hover', async ({ page }) => {
    const womenMenu = page.locator('a#ui-id-4');
    await womenMenu.hover();
    const bottomsMenu = page.locator('a#ui-id-10');
    await bottomsMenu.hover();

    await expect(bottomsMenu).toHaveCSS('background', 'rgb(232, 232, 232) none repeat scroll 0% 0% / auto padding-box border-box');
    await expect(bottomsMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('menuitem', {name: 'Pants'})).toBeVisible();
    await expect(page.getByRole('menuitem', {name: 'Shorts'})).toBeVisible();
  });

  test('Verify the transition to the "Women - Bottoms" page', async ({ page }) => {
    const womenMenu = page.locator('a#ui-id-4');
    await womenMenu.hover();
    await page.getByRole('menuitem', {name: 'Bottoms'}).click();
    
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/women/bottoms-women.html');
    expect(page.getByTitle('Bottoms - Women'));
  });
});