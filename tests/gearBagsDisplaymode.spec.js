import { test, expect } from "@playwright/test";

test.describe('gearBagsDisplayMode', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test ('Verify bags display mode', async({ page }) => {
        test.setTimeout(60*1000)
        await page.locator('#ui-id-6').hover();
        await page.locator('#ui-id-25').click();
        await expect(page).toHaveURL('/gear/bags.html');
        await expect(page).toHaveTitle('Bags - Gear');

        await page.getByRole('link', { name: 'View as  List' }).click();

        await expect(page).toHaveURL('/gear/bags.html?product_list_mode=list');
        await expect(page.locator('//select[@id="limiter"]//option[2]').last()).toHaveAttribute('selected');
        await expect(page.locator('div.toolbar-products [title="List"]').first()).toHaveAttribute('class', 'modes-mode active mode-list');
    })

})