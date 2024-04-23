import { test, expect } from "@playwright/test"

test.describe('orders and returns page', () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/");
        await page.locator('.page-wrapper footer li:has-text("Orders and Returns")').click();
    })

    test('Verify Orders and Returns header visibility', async ({page}) => {
        await expect(page.locator("h1")).toHaveText("Orders and Returns");
        await expect(page.locator("h1")).toBeVisible();
    })

    test('Verify Order Information block with input fields is visible', async ({page}) => {
        await expect(page.locator('fieldset>legend')).toBeVisible();
        await expect(page.locator('fieldset>legend')).toHaveText("Order Information");
        await expect(page.getByText('Order ID')).toBeVisible();
        await expect(page.getByRole('textbox', {name: 'Billing Last Name'})).toBeVisible();
        await expect(page.getByText('Find Order By')).toBeVisible();
        await expect(page.getByRole('textbox', {name: 'Email'})).toBeVisible();

        await page.getByText('Find Order By').selectOption('ZIP Code');
        await expect(page.getByRole('textbox', {name: 'Billing ZIP Code'})).toBeVisible();           
    })
})