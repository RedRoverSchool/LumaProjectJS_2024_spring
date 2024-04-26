import { test, expect } from "@playwright/test";

test.describe('Product Card/Add to Wish List', () => {
  const itemName = 'Inez Full Zip Jacket';
  const BASE_URL = "https://magento.softwaretestingboard.com";
  test.beforeEach(async ({ page }) => {
    await page.goto('/customer/account/login/');
    const userEmailValue = 'olga.perepel@gmail.com';
    const userPasswordValue = 'qa2024qa!';
    const emailInput = page.locator('#email');
    const userPassword = page.getByLabel('Password');
    await emailInput.fill(userEmailValue);
    await userPassword.fill(userPasswordValue);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('Women').click();
    await page.getByRole('link', { name: 'Jackets' }).click();
    await page.getByRole('link', { name: `${itemName}` }).first().click();
    await page.locator('#option-label-size-143-item-169').click();
    await page.locator('div.swatch-option.color[option-label="Orange"]').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
  });

  test("Validate link Move to Wish List located on the Shopping Cart page", async ({ page }) => {
    await page.locator('.counter-number').waitFor();
    await page.getByRole('link', { name: 'shopping cart' }).click();

    await expect(page.getByText('Move to Wishlist')).toBeVisible();
  });

  test.skip("Validate the message - the product has been moved to your wish list", async ({ page }) => {
    await page.locator('.counter-number').waitFor();
    await page.getByRole('link', { name: 'shopping cart' }).click();
    await (page.getByText('Move to Wishlist')).click();

    await expect(page.locator('.page.messages')).toContainText(`${itemName} has been moved to your wish list.`);
  });
});
