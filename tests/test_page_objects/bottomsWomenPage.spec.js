import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";
import { BASE_URL, BOTTOMS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER, EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS} from "../../helpers/testData.js";
import { WOMEN_BOTTOMS_CATEGORIES } from "../../helpers/testWomenData.js";

test.describe('bottomsWomenPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify the availability of a list of 9 category in the "Style" option drop-down list', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();
        
        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT);

        await bottomsWomenPage.clickWomenBottomsOptionStyle();
    
        expect(await bottomsWomenPage.locators.getAriaSelectedWomenBottoms()).toBeTruthy();
    
        const expectedItems = EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS;
        const receivedResult = await bottomsWomenPage.locators.getCategoryInStyle().allInnerTexts();
    
        const result = await bottomsWomenPage.extractAndCompareItems(receivedResult, expectedItems);
    
        expect(result.extractedItems).toEqual(expectedItems);
    });

    test("User can able to select a category from the suggested list of 2 (two) options: Pants.", async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();
        await bottomsWomenPage.clickWomenBottomsCategory();
        await bottomsWomenPage.clickBottomsCategoryPants();
        const actualPantsText = await bottomsWomenPage.getLocatorInnerText(bottomsWomenPage.locators.getPantsCategoryLocator());
        
        expect(actualPantsText).toEqual(WOMEN_BOTTOMS_CATEGORIES[0]);
    });

    test("User can able to select a category from the suggested list of 2 (two) options: Shorts", async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();
        await bottomsWomenPage.clickWomenBottomsCategory();
        await bottomsWomenPage.clickBottomsCategoryShorts();
        const actualShortsText =await bottomsWomenPage.getLocatorInnerText(bottomsWomenPage.locators.getShortsCategoryLocator());

        expect(actualShortsText).toEqual(WOMEN_BOTTOMS_CATEGORIES[1]);
    })
})