import { test, expect } from "@playwright/test";

test.describe.only("womenTopsStyle", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) 
            await page.getByRole('button', { name: 'Consent' }).click();
        });

    test('Verify user on Women Top page', async ({ page }) => {
        await page.getByText("Women").hover();
        await page.getByRole('menuitem', { name: 'Tops' }).click();
        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/women/tops-women.html");   
    })
})