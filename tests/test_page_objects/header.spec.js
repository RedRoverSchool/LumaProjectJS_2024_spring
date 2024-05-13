import { test, expect } from '@playwright/test';
import Header from '../../page_objects/header.js';
import HomePage from '../../page_objects/homePage.js';
import {
    shoppingItem1, shoppingItem2,
    BASE_URL,
    SHIPPING_PAGE_END_POINT, SHIPPING_PROGRESS_BAR_TEXT,
    EMPTY_CARD_MESSAGE, SHOPING_CART_COUNTER_NUMBER,
    MENU_GEAR_EXPECTED_ITEMS,
    GEAR_PAGE_HEADER,
    GEAR_PAGE_END_POINT
} from '../../helpers/testData.js'
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

    test('Verify the Create an Account link is displayed on the main page in the header', async ({ page }) => {
        const homePage = new HomePage(page);
        await expect(homePage.locators.getCreateAccountLink()).toBeVisible();
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

    test('verify display empty shopping cart message', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.open();
        await header.locators.getShoppingCart().click();

        await expect(header.locators.getEmptyCardMessage()).toHaveText(EMPTY_CARD_MESSAGE);
    })

    test('<Header/Shopping Cart Icon> Verify a counter with the number of items in the cart is displayed after adding new product', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.clickHotSellersXSSizeButton(0);
        await homePage.clickHotSellersBlueColor(0);
        await homePage.clickHotSellersAddToCartButton(0);
        await header.waitForCounterNumber();

        await expect(header.locators.getCounterNumber()).toHaveText(SHOPING_CART_COUNTER_NUMBER);
    })

    test('<Header/Header logo> Validate website has store logo', async ({ page }) => {
        const header = new Header(page);

        await expect(header.locators.getLogoLink()).toBeVisible();
    })
    test('Verify only shopping cart icon is displayed if no items in the shopping cart', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await header.locators.getShoppingCart()
        await header.locators.getCounterNumber();

        await expect(header.locators.getShoppingCart()).toBeVisible();
        await expect(header.locators.getCounterNumber()).not.toBeVisible();
    })

    test('Verify the modal windows can close', async ({ page }) => {
        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.open();
        await header.clickShoppingCartIcon();
        await header.clickCrossIconModalWindowShoppingCart();

        await expect(header.locators.getEmptyCardMessage()).not.toBeVisible();
    })

    test('Gear drop-down menu contains: Bags, Fitness equipment, Watches items', async ({ page }) => {
        const header = new Header(page);
        await header.hoverGearMenu();

        await expect(header.locators.getGearSubMenu()).toBeVisible();
        expect(MENU_GEAR_EXPECTED_ITEMS).toEqual(await header.getGearSubMenuActualItems());
    });

    test('User could navigate from the Gear menu to the Gear page', async ({ page }) => {
        const header = new Header(page);
        await header.clickGearMenu();

        await expect(page).toHaveURL(BASE_URL + GEAR_PAGE_END_POINT);
        await expect(page).toHaveTitle(GEAR_PAGE_HEADER);
    });

})