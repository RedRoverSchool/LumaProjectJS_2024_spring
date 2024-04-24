import { test, expect } from "@playwright/test";

test.describe('Women/Bottoms/Style', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test('Verify the changes to the menuitem "Women" style when hover', async ({ page }) => {
    const wonenMenu = page.locator("a#ui-id-4");
    await page.getByRole('menuitem', {name: 'Women'}).hover();

    await expect(wonenMenu).toHaveClass(/ui-state-focus/);
    await expect(wonenMenu).toHaveCSS('color', 'rgb(51, 51, 51)');
    await expect(page.getByRole('menuitem', {name: 'Tops'})).toBeVisible();
    await expect(page.getByRole('menuitem', {name: 'Bottoms'})).toBeVisible();
  });

});