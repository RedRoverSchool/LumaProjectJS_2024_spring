import { expect } from '@playwright/test';
import { test } from './base.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';
import { WOMEN_JACKETS_NAME, BASE_URL, SHOPPING_CART_END_POINT, EMPTY_CARD_MESSAGE, NEW_USER_DATA } from "../../helpers/testData.js";
import HomePage from '../../page_objects/homePage.js';
import WishListPage from '../../page_objects/wishListPage.js';

test.describe('shopping Cart', () => {

    test('Validate link Move to Wish List located on the Shopping Cart page', async ({ page, createNewAccount }) => {
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

    test.only('login and clean', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();

        const radiantTeePage = await homePage.clickRadiantTee();
        await radiantTeePage.clickRadiantTeeSizeS();
        await radiantTeePage.clickRadiantTeeColorBlue();
        await radiantTeePage.clickAddToCartBtn();
        await radiantTeePage.clickRadiantTeeSizeM();
        await radiantTeePage.clickAddToCartBtn();

        // const radiantTeePage = await homePage.clickRadiantTee();
        await radiantTeePage.clickRadiantTeeSizeS();
        await radiantTeePage.clickRadiantTeeColorBlue();
        await radiantTeePage.clickAddToWishList();

        const signInPage = await homePage.clickSignInLink();
        await signInPage.fillEmailInputField(NEW_USER_DATA.emailForLogin);
        await signInPage.fillPasswordInputField(NEW_USER_DATA.passwordForLogin);
        await signInPage.clickSignInBtnAndGoMyAccount();

        const myWishList = new WishListPage(page);
        await myWishList.clickLogoLink();
        await homePage.locators.getGreetingName(NEW_USER_DATA.firstName + " " + NEW_USER_DATA.lastNameForLogin).waitFor();
        await homePage.clickWelcomeDropdown();
        const myAccount = await homePage.clickMyAccountLink();

        //  expect( await myAccount.locators.getShoppingCartCounterNumber()).toHaveText("2");
        // console.log(await myAccount.locators.getShoppingCartCounterNumber().innerText());
       
        if (await myAccount.locators.getShoppingCartCounterNumber().innerText() !== "") {
            let count = +(await myAccount.locators.getShoppingCartCounterNumber().innerText());
            await myAccount.clickShoppingCardCounterNumber();            
            let idx = 0;
            while (count > 0) { 
                await myAccount.locators.getShoppingCartRemoveProduct(idx).focus();                   
                await myAccount.clickShoppingCartRemoveProduct(idx);
                await myAccount.clickOkBtn();
                idx++;
                count--;
            }
            await page.reload();           
        }

        // expect( await myAccount.locators.getShoppingCartCounterNumber().innerText()).toEqual("");

        // if(await myAccount.locators.getMyWishListCounter().innerText() !== "") {
        //     await myAccount.clickMyWishListRemoveProduct();

        // }

        //  expect(await myAccount.locators.getMyWishListCounter()).toHaveText('1 item')
    //    await page.reload(); 

    //    expect(await myAccount.locators.getGoToWishList()).toBeVisible()
        // expect(await myAccount.locators.getWishListEmptyMessage()).toBeVisible();

    //    expect(await myAccount.locators.getWishListEmptyMessage()).not.toBeVisible();

    })


})

