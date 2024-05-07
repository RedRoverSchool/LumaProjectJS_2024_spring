import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import CreateAccountPage from '../../page_objects/createAccountPage.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';
import WomenPage from '../../page_objects/womenPage.js';
import JacketsWomenPage from '../../page_objects/jacketsWomenPage.js';
import InezFullZipJacketPage from '../../page_objects/inezFullZipJacketPage.js';
import ShoppingCartPage from '../../page_objects/shoppingCartPage.js';

import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM, MY_ACCOUNT_HEADER, WOMEN_JACKETS_NAME } from "../../helpers/testData.js";

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

    test.skip('Validate link Move to Wish List located on the Shopping Cart page', async ({ page }) => {
        const myAccountPage = new MyAccountPage(page);
        const womenPage = new WomenPage(page);
        const jacketsWomenPage = new JacketsWomenPage(page);
        const inezFullZipJacketPage = new InezFullZipJacketPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        await expect(myAccountPage.locators.getMyAccountHeader()).toHaveText(MY_ACCOUNT_HEADER);
        await myAccountPage.clickWomenLink();
        await womenPage.clickWomenJacketsLink();
        await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        await inezFullZipJacketPage.clickShoppingCartLink();

        await expect(shoppingCartPage.locators.getMoveToWishListLink()).toBeVisible();
    })

    test.skip('Validate the message - the product has been moved to your wish list', async ({ page }) => {
        const myAccountPage = new MyAccountPage(page);
        const womenPage = new WomenPage(page);
        const jacketsWomenPage = new JacketsWomenPage(page);
        const inezFullZipJacketPage = new InezFullZipJacketPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        await expect(myAccountPage.locators.getMyAccountHeader()).toHaveText(MY_ACCOUNT_HEADER);
        await myAccountPage.clickWomenLink();
        await womenPage.clickWomenJacketsLink();
        await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        await inezFullZipJacketPage.clickShoppingCartLink();
        await shoppingCartPage.clickMoveToWishListLink();

        await expect(shoppingCartPage.locators.getAlerMessageAddToWishList()).toHaveText(`${WOMEN_JACKETS_NAME} has been moved to your wish list.`);
    })
})

