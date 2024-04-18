import { expect, test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test.describe('category block with sub-categories links: tops and bottoms', () => {
    const BASE_URL = "https://magento.softwaretestingboard.com/";
    const menPageUrl = 'men.html';

    test.beforeEach(async ({ page }) => {
        await page.goto('/' + menPageUrl);
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
        await expect(page).toHaveURL(BASE_URL + menPageUrl);
    });

    test('Category block contains sub-categories: Tops and Bottoms which are links in blue text', async ({ page }) => {
        const category = page.locator('.options dt');

        await expect(category).toBeVisible();
        await expect(category).toHaveText('Category');        

        await expect(page.getByRole('link', { name: 'Tops' })).toHaveCSS('color', 'rgb(0, 107, 180)');
        await expect(page.getByRole('link', { name: 'Bottoms' })).toHaveCSS('color', 'rgb(0, 107, 180)');
    });
});