import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage';
import ProductCardPage from '../../page_objects/ProductCardPage';

test.describe('productPage.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);
        await homePage.open();
    })

test('test visibility information on product card', async ({ page }) => {
    const homePage = new HomePage(page);
    const productCartPage = new ProductCardPage(page);
    homePage.goToCardPage()
    
    await expect(productCartPage.locators.getTitleOfProductCart()).toHaveText('Radiant Tee');
    await expect(productCartPage.locators.getPriceOfProduct()).toHaveText('$22.00');
    await expect(productCartPage.locators.getProductInStock()).toBeVisible();
  });

})