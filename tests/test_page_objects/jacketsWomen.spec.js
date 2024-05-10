import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import JacketsWomenPage from "../../page_objects/jacketsWomenPage";
import { MessageComparisonList } from "../../helpers/testData";

test.describe('jacketsWomen.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
    
        await homePage.open();
        await homePage.hoverWomenLink()
        await homePage.clickWomenJacketsLink()
      });
    test.only('Verify message add to comparison list', async ({ page }) => {
        const jacketsWomenPage = new JacketsWomenPage(page);

        await jacketsWomenPage.hoverOlivia14ZipLightJacket();
        await jacketsWomenPage.clickAddToCompareButton();

        await expect(jacketsWomenPage.locators.getAddToCompareButton()).toBeVisible();
        await expect(jacketsWomenPage.locators.getMessageAddedProductComparisonList().toHaveText(MessageComparisonList))
    });
})