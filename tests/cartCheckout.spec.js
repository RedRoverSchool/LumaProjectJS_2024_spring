import { test, expect } from "@playwright/test";

test.describe('US Cart/Checkout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('TC 09_2_06 <Cart/Checkout> User able to type in their First Name', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByRole('button', { name: 'Add to Cart' }).first().click();


        await page.locator(".showcart .counter-number").click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'First Name' }).click();
        await page.getByLabel('First Name').fill('Nata');
        await expect(page.locator('#shipping-new-address-form input[name="firstname"]')).toHaveValue('Nata');
    })

    test('TC 09.2_07 <Cart/Checkout> User able to type in Last Name', async ({ page }) => {
        
        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByRole('button', { name: 'Add to Cart' }).first().click();

        await page.locator(".showcart .counter-number").click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'Last Name' }).click();
        await page.getByLabel('Last Name').fill('Smith');

        await expect(page.locator('#shipping-new-address-form input[name="lastname"]')).toHaveValue('Smith');
    })
})