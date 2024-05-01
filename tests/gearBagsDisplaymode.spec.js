import { test, expect } from "@playwright/test";

test.describe('gearBagsDisplayMode', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
    });

test('Verify the number of items presented in display mode', async ({page}) => {
    await page.getByRole('menuitem', { name: 'Gear' }).hover();
    await page.getByRole('menuitem', { name: 'Bags' }).click();

    await expect(page).toHaveURL('/gear/bags.html');

    await page.locator('strong[title="Grid"]').first().click();

    await expect(page.locator('strong[title="Grid"]').first()).toHaveAttribute('class', 'modes-mode active mode-grid');

    const expectedCountItems = await page.locator('//select[@id="limiter"]//option[1]').first().innerText();
    const actualCountItems = await page.locator('ol.list li').count();

    expect(actualCountItems).toEqual(+expectedCountItems);
});
})