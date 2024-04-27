import { test, expect } from '@playwright/test';
import Header from '../../page_objects/header.js';
import HomePage from '../../page_objects/homePage.js';
import {shoppingItem1, shoppingItem2, BASE_URL, SHIPPING_PAGE_END_POINT, SHIPPING_PROGRESS_BAR_TEXT} from '../../helpers/testData.js'
import ShippingPage from '../../page_objects/shippingPage.js';

test.describe('header.spec', () => {            

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);
        await homePage.open();
    })

    test('Verify quantity and total cost in the shopping cart', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);
       
        const radiantTeePage = await homePage.clickRadiantTee();
        await radiantTeePage.clickRadiantTeeSizeS();
        await radiantTeePage.clickRadiantTeeColorBlue();
        await radiantTeePage.clickAddToCartBtn();
        await radiantTeePage.clickRadiantTeeSizeM();
        await radiantTeePage.clickAddToCartBtn();
            
        await header.clickLogoLink();
        await header.clickCounterNumber();
        const quantityItems = shoppingItem1.quantity + shoppingItem2.quantity;
        const totalCost = (shoppingItem1.price + shoppingItem2.price).toFixed(2);

        await expect(header.locators.getTotalQuantity()).toHaveText(`${quantityItems}`);
        await expect(header.locators.getTotalCost()).toHaveText("$" + totalCost);    
    })

    test('"Proceed to Checkout" button in the Shopping Cart Modal Window is visible, clickable, and redirects to the Shipping Page', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);
        const shippingPage = new ShippingPage(page); 
       
        const radiantTeePage = await homePage.clickRadiantTee();
        await radiantTeePage.clickRadiantTeeSizeS();
        await radiantTeePage.clickRadiantTeeColorBlue();
        await radiantTeePage.clickAddToCartBtn();

        await header.clickLogoLink();
        await header.clickCounterNumber();

        await expect(header.locators.getProceedToCheckoutBtn()).toBeVisible();
        await header.clickProceedToCheckoutBtn();
        await shippingPage.locators.getShippingAddressHeader().waitFor(5000);

        await expect(page).toHaveURL(BASE_URL + SHIPPING_PAGE_END_POINT);
        await expect(shippingPage.locators.getShippingProgressBar()).toHaveText(SHIPPING_PROGRESS_BAR_TEXT);       
    })

    test('verify display the shopping cart icon', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.open();
        await expect(header.locators.getShoppingCart()).toBeVisible();
    })

    test('verify the modal windows opens on click on shopping cart icon', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.open();
        await header.locators.getShoppingCart().click();

        await expect(header.locators.getMiniCart()).toBeVisible();
        await expect(page).toHaveURL(BASE_URL);
    })
})