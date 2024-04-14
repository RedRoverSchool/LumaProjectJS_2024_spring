import {test, expect} from "@playwright/test";

test.describe('header shopping cart modal window', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/');
    })

    test('verify display the shopping cart icon', async ({page}) => {
        const cartIcon = await page.getByRole('link', {name: ' My Cart'});

        await expect(cartIcon).toBeVisible();
    })

    test('verify the modal windows opens on click on shopping cart icon', async ({page}) => {
        await page.getByRole('link', {name: ' My Cart'}).click();
        const miniCart = await page.locator('#ui-id-1')

        await expect(miniCart).toBeVisible();
        await expect(page).toHaveURL('/');
    })

    test('verify display empty shopping cart message', async ({page}) => {
        const emptyCardMessageText = 'You have no items in your shopping cart.';

        await page.getByRole('link', {name: ' My Cart'}).click();
        const emptyCardMessage = await page.locator('.block-minicart .subtitle.empty')

        await expect(emptyCardMessage).toHaveText(emptyCardMessageText);
    })
})