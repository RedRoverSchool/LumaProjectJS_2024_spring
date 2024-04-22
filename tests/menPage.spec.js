import { expect, test } from "@playwright/test";


test.describe('menPage', () => {
    const BASE_URL = "https://magento.softwaretestingboard.com/";
    const menPageUrl = 'men.html';

    const categoryItems = {
        Tops: 'men/tops-men.html',
        Bottoms: 'men/bottoms-men.html',
    };

    test.beforeEach(async ({ page }) => {
        await page.goto('/' + menPageUrl);
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
        await expect(page).toHaveURL(BASE_URL + menPageUrl);
    });

    test('Men page contains Shop by category block which is located on the left side of the page', async ({ page }) => {
        const shopByCategoryBlock = page.locator('[class="sidebar sidebar-main"]');

        await expect(shopByCategoryBlock).toBeVisible();
        await expect(shopByCategoryBlock).toHaveCSS('float', 'left');
    });

    test('Category block contains sub-categories: Tops and Bottoms which are links in blue text', async ({ page }) => {
        const category = page.locator('.options dt');

        await expect(category).toBeVisible();
        await expect(category).toHaveText('Category');

        await expect(page.getByRole('link', { name: 'Tops' })).toHaveCSS('color', 'rgb(0, 107, 180)');
        await expect(page.getByRole('link', { name: 'Bottoms' })).toHaveCSS('color', 'rgb(0, 107, 180)');
    });

    for (const categoryItem in categoryItems) {
        test(`${categoryItem} sub-category link led to the ${categoryItem}-Men page`, async ({ page }) => {
            const categoryItemPageUrl = categoryItems[categoryItem];
            const topsLink = page.getByRole('link', { name: categoryItem });
            await expect(topsLink).toBeVisible();
            await topsLink.click();

            await expect(page).toHaveTitle(`${categoryItem} - Men`);
            await expect(page).toHaveURL(BASE_URL + categoryItemPageUrl);
        });
    };

    test('Tops and Bottoms sub-categories have a counter for items from the right side of the relevant link', async ({ page }) => {
        await page.getByRole('link', { name: 'Tops' }).isVisible();
        await page.getByRole('link', { name: 'Bottoms' }).isVisible();

        const subCaregoryRow = page.locator('ol.items li');
        await expect(subCaregoryRow).toHaveCount(2);

        for (let itx = 0; itx < await subCaregoryRow.count(); itx++) {
            let rowArrayValue = (await subCaregoryRow.nth(itx).textContent()).trim().split('\n');
            expect(rowArrayValue[0].match(/Tops|Bottoms/)).toBeTruthy();
            expect(typeof parseInt(rowArrayValue[1])).toEqual('number');
        };
    });
});