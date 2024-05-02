import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import MenPage from "../../page_objects/menPage.js";
import ProductPage from "../../page_objects/productPage.js";

test.describe('menPage.spec', () => {

    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);    
        await homePage.open();
    });

    test('TC 12.2.1.01 Product Card/Product Info |  Product Name', async ({page}) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLinkNav()
        
        await  menPage.clickProductItemLink();
        const productPage = new ProductPage(page);
        
        expect(productPage.locators.getProductName()).toBeVisible;
    })
});