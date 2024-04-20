import { test, expect } from "@playwright/test";

test.describe('page checkout/cart', () => {

  const whatNewUrl = 'https://magento.softwaretestingboard.com/what-is-new.html';
    test.beforeEach(async ({ page }) => {
      await page.goto('/');

    })

    test( 'should be cart-summary', async ({ page}) => {

        await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
        await page.getByText('Olivia 1/4 Zip Light Jacket').click();
        await page.getByRole('button', {name: 'Add to Cart'}).click();
        await page.locator('#option-label-size-143-item-168').click();
        await page.locator('#option-label-color-93-item-50').click();

        await page.getByRole('button', {name: 'My Cart'}).isVisible();
        await page.click('button[title="Add to Cart"]');
        await page.waitForTimeout(3000);

        await page.click('a.action.showcart');

        await page.getByRole('link', {name: 'View and Edit Cart'}).click();
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/checkout/cart/');

        const cartSummary = page.locator('.cart-summary');
        await expect(cartSummary).toBeVisible();
        await expect(cartSummary).toHaveCSS('float', 'right');
    })
})