import { test, expect } from '@playwright/test';
import Header from '../../page_objects/header.js';
import HomePage from '../../page_objects/homePage.js';
import {shoppingItem1, shoppingItem2} from '../../helpers/testData.js'

test.describe('header.spec', () => {

    test('Verify quantity and total cost in the shopping cart', async ({ page }) => {

        const homePage = new HomePage(page);
        const header = new Header(page);

        await homePage.open();
        const radiantTeePage = await homePage.clickRadiantTee();
        await radiantTeePage.clickRadiantTeeSizeS();
        await radiantTeePage.clickRadiantTeeColorBlue();
        await radiantTeePage.clickAddToCartBtn();
        await radiantTeePage.clickRadiantTeeSizeM();
        await radiantTeePage.clickAddToCartBtn();
            
        await header.clickLogoLink();
        await header.clickShoppingCartLink();
        const quantityItems = shoppingItem1.quantity + shoppingItem2.quantity;
        const totalCost = (shoppingItem1.price + shoppingItem2.price).toFixed(2);

        await expect(header.locators.getTotalQuantity()).toHaveText(`${quantityItems}`);
        await expect(header.locators.getTotalCost()).toHaveText("$" + totalCost);    
    })
})