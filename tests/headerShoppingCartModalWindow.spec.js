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
  
  test('TC 01.3.1_04| Verify quantity and total cost in the shopping cart', async ({page}) => {
        const shoppingItem1 = {
            name: "Radiant Tee",
            price: 22.00,
            size: "S", 
            color: "Blue",
            quantity: 1
        }

        const shoppingItem2 = {
            name: "Radiant Tee",
            price: 22.00,
            size: "M", 
            color: "Blue",
            quantity: 1
        }

        const radiantTeeLocator = page.getByTitle('Radiant Tee');
        const radiantTeeSizeSLocator = page.getByText('S', {exact: true});
        const radiantTeeSizeMLocator = page.getByText('M', {exact: true});
        const radiantTeeColorBlueLocator = page.locator('[option-label = "Blue"]');
        const addToCartBtn = page.getByRole('button', {name: "Add to Cart"});
        const shoppingCartLink = page.getByRole('link', {name: "My Cart"});
        const totalQuantityLocator = page.locator('.count:first-child');
        const quantityItems = shoppingItem1.quantity + shoppingItem2.quantity;
        const totalCostLocator = page.locator('.subtotal .price');
        const totalCost = (shoppingItem1.price + shoppingItem2.price).toFixed(2);


        await radiantTeeLocator.click();
        await radiantTeeSizeSLocator.click();
        await radiantTeeColorBlueLocator.click();
        await addToCartBtn.click();
        await radiantTeeSizeMLocator.click();
        await addToCartBtn.click();
        await shoppingCartLink.click();
        
        await expect(totalQuantityLocator).toHaveText(`${quantityItems}`);
        await expect(totalCostLocator).toHaveText("$" + totalCost);
    })

})