import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import CreateAccountPage from '../../page_objects/createAccountPage.js';
import MyOrdersPage from '../../page_objects/myOrdersPage.js';
import MyAccountPage from '../../page_objects/myAccountPage.js';

import { MY_ACCOUNT_END_POINT, MY_ORDERS_PAGE_END_POINT, MY_ORDERS_HEADER, BASE_URL, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM } from "../../helpers/testData.js";

test.describe('myOrders', () => {
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
    
    test('checkMyOrdersLink', async ({ page }) => {
        const myAccountPage = new MyAccountPage(page);
        const myOrdersPage = new MyOrdersPage(page);
        await page.waitForURL(BASE_URL + MY_ACCOUNT_END_POINT);
        await myAccountPage.clickMyOrdersLink();

        await expect(page).toHaveURL(BASE_URL + MY_ORDERS_PAGE_END_POINT);
        await expect(myOrdersPage.locators.getTitle()).toContainText(MY_ORDERS_HEADER);


    })
})

