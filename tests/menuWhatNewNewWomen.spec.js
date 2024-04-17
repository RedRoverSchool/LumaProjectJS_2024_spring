import { test, expect } from "@playwright/test";

test.describe('page gear', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    })

    test('should  be "new in women" section', async ({ page }) => {
        const whatNewUrl = 'https://magento.softwaretestingboard.com/what-is-new.html';
        await page.goto(whatNewUrl);
        await expect(page).toHaveURL(whatNewUrl);
        await page.getByText("New in women's");
        await expect(page.getByText("New in women's")).toBeVisible();

        const newItems =  page.getByText('Hoodies & Sweatshirts Jackets Tees Bras & Tanks Pants Shorts');
        await page.getByText(newItems)
        await expect(newItems).toBeVisible();
    })
})
