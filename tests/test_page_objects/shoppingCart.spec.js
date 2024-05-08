import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import CreateAccountPage from '../../page_objects/createAccountPage.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';
import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM, WOMEN_JACKETS_NAME, BASE_URL, SHOPPING_CART_END_POINT, EMPTY_CARD_MESSAGE } from "../../helpers/testData.js";

test.describe('shopping Cart', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        const createAccountPage = new CreateAccountPage(page);
        const testEmail = EMAIL;
        await homePage.open();
        await homePage.clickCreateAccountLink();
        await createAccountPage.clickFirstNameField();
        await createAccountPage.fillFirstNameField(FIRST_NAME);
        await createAccountPage.clickLastNameField();
        await createAccountPage.fillLastNameField(LAST_NAME);
        await createAccountPage.clickEmailField();
        await createAccountPage.fillEmailField(testEmail);
        await createAccountPage.clickPasswordField();
        await createAccountPage.fillPasswordField(PASSWORD);
        await createAccountPage.clickConfirmPasswordField();
        await createAccountPage.fillConfirmPasswordField(PASSWORD_CONFIRM);
        await createAccountPage.clickCreateAccountButton();
    })

    test('Validate link Move to Wish List located on the Shopping Cart page', async ({ page }) => {
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

    test('Validate the message - the product has been moved to your wish list', async ({ page }) => {
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

    test('Redirected to the updated Shopping cart page after add item to Wish List', async ({ page }) => {
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

