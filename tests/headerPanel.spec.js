import { test, expect } from "@playwright/test";

test.describe('headerPanel', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('TC01.5.1_02 verify that headerPanel has text and buttons Sign In/Create an Account', async ({ page }) => {
        const expectedHeaderPanel = [
            'Click “Write for us” link in the footer to submit a guest post',
            'Sign In',
            'Create an Account'
        ]

        const headerPanel = page.locator('ul[class="header links"]:nth-child(1) li');
        await expect(headerPanel).toHaveCount(3);

        for (let i = 0; i < headerPanel.length; i++) {
            await expect(elements[i]).toBeVisible();
        }

        const actualHeaderPanel = await headerPanel.allInnerTexts().then(elements => elements.map(el => el.trim()));
        expect(actualHeaderPanel).toEqual(expectedHeaderPanel)
    })
})

