import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import JacketsWomenPage from "../../page_objects/jacketsWomenPage";
import { CompareProductsOlivia, MessageComparisonList } from "../../helpers/testData";

test.describe('jacketsWomen.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
    
        await homePage.open();
        await homePage.hoverWomenLink();
        await homePage.hoverWomenTopsLink();
        await homePage.clickWomenJacketsLink();
      });
    test('Verify message add to comparison list', async ({ page }) => {
        const jacketsWomenPage = new JacketsWomenPage(page);

        await jacketsWomenPage.hoverOlivia14ZipLightJacket();

        await expect(jacketsWomenPage.locators.getAddToCompareButton()).toBeVisible();
        await jacketsWomenPage.clickAddToCompareButton();
        await page.waitForTimeout(3000);
        
        const actualResult = await jacketsWomenPage.locators.getMessageAddedProductComparisonList().textContent();

        expect (actualResult).toContain(MessageComparisonList);
    });
    test('Verify product to compere displayed in the header on the lef side', async ({ page }) => {
        const jacketWomenPage = new JacketsWomenPage(page);

        await jacketWomenPage.hoverOlivia14ZipLightJacket();
        await jacketWomenPage.clickAddToCompareButton();
        await page.waitForTimeout(3000);

        await expect(jacketWomenPage.locators.getCompareProductDisplayedOnLeftSide()).toBeVisible();
        await expect(jacketWomenPage.locators.getCompareProductDisplayedOnLeftSide()).toContainText(CompareProductsOlivia);
    })
})