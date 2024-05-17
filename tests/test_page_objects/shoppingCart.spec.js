import { expect } from '@playwright/test';
import { test } from './base.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';
import { WOMEN_JACKETS_NAME, BASE_URL, SHOPPING_CART_END_POINT, EMPTY_CARD_MESSAGE } from "../../helpers/testData.js";

test.describe('shopping Cart', () => {

    test('Validate link Move to Wish List located on the Shopping Cart page', async ({ page, createNewAccount}) => {
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.waitForMyAccountHeader();
        const womenPage = await myAccountPage.clickWomenLink();
        const jacketsWomenPage = await womenPage.clickWomenJacketsLink();
        const inezFullZipJacketPage = await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        await inezFullZipJacketPage.waitForShoppingCartLink();
        const shoppingCartPage = await inezFullZipJacketPage.clickShoppingCartLink();

        await expect(shoppingCartPage.locators.getMoveToWishListLink()).toBeVisible();
    })

    test('Validate the message - the product has been moved to your wish list', async ({ page, createNewAccount }) => {
        const myAccountPage = new MyAccountPage(page);
        const womenPage = await myAccountPage.clickWomenLink();
        const jacketsWomenPage = await womenPage.clickWomenJacketsLink();
        const inezFullZipJacketPage = await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        const shoppingCartPage = await inezFullZipJacketPage.clickShoppingCartLink();
        await shoppingCartPage.waitForMoveToWishListLink();
        await shoppingCartPage.clickMoveToWishListLink();

        await expect(shoppingCartPage.locators.getAlerMessageAddToWishList()).toHaveText(`${WOMEN_JACKETS_NAME} has been moved to your wish list.`);
    })

    test('Redirected to the updated Shopping cart page after add item to Wish List', async ({ page, createNewAccount }) => {
        const myAccountPage = new MyAccountPage(page);
        const womenPage = await myAccountPage.clickWomenLink();
        const jacketsWomenPage = await womenPage.clickWomenJacketsLink();
        const inezFullZipJacketPage = await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        const shoppingCartPage = await inezFullZipJacketPage.clickShoppingCartLink();
        await shoppingCartPage.waitForMoveToWishListLink();
        await shoppingCartPage.clickMoveToWishListLink();

        await expect(page).toHaveURL(BASE_URL + SHOPPING_CART_END_POINT);
        await expect(shoppingCartPage.locators.getEmptyCartMessage()).toContainText(`${EMPTY_CARD_MESSAGE}`);
    })
})

