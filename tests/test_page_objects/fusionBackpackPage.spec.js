import {test, expect} from "@playwright/test";
import FusionBackpackPage from "../../page_objects/fusionbackpackPage.js";
import HomePage from "../../page_objects/homePage.js"

test.describe('fusionBackpackPage.spec', () => {
    test.beforeEach(async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickFifthCardImage();
    })

    test('photo Product in full screen', async ({page}) => {
        const fusionBackpackPage = new FusionBackpackPage(page)
        await fusionBackpackPage.clickProductMainImage();
        await expect(fusionBackpackPage.locators.getFusionBackpackFullScreen()).toBeVisible();
    })

    test('slide photo in home mode', async ({page}) => {
        const fusionBackpackPage = new FusionBackpackPage(page);
        await expect(fusionBackpackPage.locators.getFusionBackpackGrayImage()).toHaveAttribute("src", /gray/);
        await fusionBackpackPage.clickSlideButton();
        await expect(fusionBackpackPage.locators.getFusionBackpackBlueImage()).toHaveAttribute("src", /blue/);
    })
})