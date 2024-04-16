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

    test('Verify Counter Icon Update on Adding/Removing Items ', async ({ page }) => {
        const counterIcon = page.locator('.counter-number')
        await expect(counterIcon).toBeHidden()
      
        const firstProduct = page.locator('.product-item').first()
        await expect(firstProduct).toContainText('Radiant Tee')
        
        const labelSizeS = page.getByRole('option', {name: 'S'}).first()
        await expect(labelSizeS).toBeVisible()
        await labelSizeS.click()

        const labelColor = page.getByRole('option', {name: 'Blue'}).first()
        await expect(labelColor).toBeVisible()
        await labelColor.click()
        await page.getByText('Add to Cart', {exact:true}).first().click()

        await expect(counterIcon).toHaveText('1')

        const shoppingCart = page.locator('.showcart')
        await expect(shoppingCart).toBeVisible()
        shoppingCart.click()
        await page.getByTitle('Remove item').click()
        await page.getByRole('button', {name: 'OK'}).click()
        shoppingCart.click()

        await expect(page.locator('strong.empty')).toHaveText('You have no items in your shopping cart.')
        await expect(counterIcon).toBeHidden()
    })

})