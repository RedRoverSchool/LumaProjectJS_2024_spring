import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';

import { MY_ORDERS_PAGE_END_POINT, MY_ORDERS_HEADER, BASE_URL, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM, ADRESS_DATA, } from "../../helpers/testData.js";


test.describe('myOrders', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        const createAccountPage = await homePage.clickCreateAccountLink();
        await createAccountPage.clickFirstNameField();
        await createAccountPage.fillFirstNameField(FIRST_NAME);
        await createAccountPage.clickLastNameField();
        await createAccountPage.fillLastNameField(LAST_NAME);
        await createAccountPage.clickEmailField();
        await createAccountPage.fillEmailField(EMAIL);
        await createAccountPage.clickPasswordField();
        await createAccountPage.fillPasswordField(PASSWORD);
        await createAccountPage.clickConfirmPasswordField();
        await createAccountPage.fillConfirmPasswordField(PASSWORD_CONFIRM);
        await createAccountPage.clickCreateAccountButton();
    })

    test('checkMyOrdersLink', async ({ page }) => {
        const myAccountPage = new MyAccountPage(page);
        const myOrdersPage = await myAccountPage.clickMyOrdersLink();

        await expect(page).toHaveURL(BASE_URL + MY_ORDERS_PAGE_END_POINT);
        await expect(myOrdersPage.locators.getTitle()).toContainText(MY_ORDERS_HEADER);

    })

    test('OrderHistory', async ({ page }) => {
        const myAccountPage = new MyAccountPage(page);
        const womenPage = await myAccountPage.clickWomenLink();
        const jacketsWomenPage = await womenPage.clickWomenJacketsLink();
        const inezFullZipJacketPage = await jacketsWomenPage.clickWomenJacketsName();
        await inezFullZipJacketPage.clickInezJacketSizeOptionLable();
        await inezFullZipJacketPage.clickInezJacketColorOptionLable();
        await inezFullZipJacketPage.clickInezJacketAddToCartButton();
        await inezFullZipJacketPage.waitForShoppingCartLink();
        const shoppingCartPage = await inezFullZipJacketPage.clickShoppingCartLink();
        await shoppingCartPage.waitForOrderTotalText();
        const shippingPage = await shoppingCartPage.clickProceedToCheckoutButton();
        await shippingPage.fillStreetNameField(ADRESS_DATA.street);
        await shippingPage.fillCityField(ADRESS_DATA.city);
        await shippingPage.clickSelectRegionDropdown();
        await shippingPage.fillPostCodeField(ADRESS_DATA.postal_code);
        await shippingPage.fillPhoneNumberField(ADRESS_DATA.phone_number);
        await shippingPage.checkByTypeRadioButton();
        const paymentMethodPage = await shippingPage.clickNextButton();
        await paymentMethodPage.waitPlaceOrderButton();
        const checkoutOnepageSuccessPage = await paymentMethodPage.clickPlaceOrderButton();
        await checkoutOnepageSuccessPage.waitTankYouText();

        await checkoutOnepageSuccessPage.clickActionSwitchButton();
        await checkoutOnepageSuccessPage.clickMyAccountLink();
        const myOrders = await myAccountPage.clickMyOrdersLink();
        
        await expect(myOrders.locators.getViewOrdersLink()).toBeVisible();
        await expect(myOrders.locators.getReorderLink()).toBeVisible();

    })

})

