import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import OrdersAndReturnsPage from '../../page_objects/ordersAndReturnsPage.js';
import { ORDERS_AND_RETURNS_HEADER } from '../../helpers/testData.js';

test.describe('ordersAndReturnsPage.spec', () => {
    test.beforeEach(async ({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();   
    })

    test('<Footer/Orders and Returns/page>Verify header "Orders and Returns" is displayed on the "Orders and Returns" page', async ({page}) => {
        const homePage = new HomePage(page);
        const ordersAndReturnsPage = await homePage.clickOrdersAndReturnsLink();

        await expect(ordersAndReturnsPage.locators.getOrdersAndReturnsHeader()).toHaveText(ORDERS_AND_RETURNS_HEADER);
        await expect(ordersAndReturnsPage.locators.getOrdersAndReturnsHeader()).toBeVisible();
    })
})