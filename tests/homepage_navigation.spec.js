import { test, expect } from "@playwright/test";

test.describe('Homepage | Navigation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  })

  test('verify Navigation links size', async ({ page }) => {
    const navigation = page.getByRole('navigation');
    const navitems = navigation.getByRole('listitem');

    expect(await navitems.count()).toEqual(6);   
  });  
});
