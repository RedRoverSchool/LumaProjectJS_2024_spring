import { test, expect } from "@playwright/test";



test.describe('Redirection from different pages into Home page', () => {
    const PAGES = {
        "whatsNew'": "/what-is-new.html",
        "women": "/women.html",
        "men": "/men.html",
        "gear": "/gear.html",
        "training": "/training.html",
        "sale": "/sale.html"
    }

    const HOMEPAGE_LINK = "https://magento.softwaretestingboard.com/"

    test.beforeEach(async ({page}) => {
        await page.goto('/');
        const LOGO_LOCATOR = page.locator('.logo');
    })

    test('Redirection from Training page to Home page', async ({page}) => {
        await page.goto(PAGES.training);
        await page.locator('.logo').click();
        await expect(page).toHaveURL(HOMEPAGE_LINK);

    })
})
