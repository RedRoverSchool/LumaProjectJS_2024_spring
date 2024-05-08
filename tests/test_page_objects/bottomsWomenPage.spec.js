import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";
import { BASE_URL, BOTTOMS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER, EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS, BOTTOMS_WOMEN_STYLE_BASE_LAYER_PAGE_END_POINT} from "../../helpers/testData.js";
import { WOMEN_BOTTOMS_CATEGORIES,WOMEN_BOTTOMS_SIZE } from "../../helpers/testWomenData.js";
import { count } from "console";

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

    test('Verify that each category displays the number of products', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();
    
        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT);
    
        await bottomsWomenPage.clickWomenBottomsOptionStyle();
    
        expect(await bottomsWomenPage.locators.getAriaSelectedWomenBottoms()).toBeTruthy();
        
        const categoriesStyle = await bottomsWomenPage.locators.getCategoriesStyle();
    
        for (const category of categoriesStyle) {
            const countItems = await bottomsWomenPage.locators.getCountItemsInCategoryStyle(category);
    
            expect(countItems).toBeTruthy();
            expect(await countItems.isVisible()).toBeTruthy();
            expect(await countItems.textContent()).toMatch(/\d+/);
        }
    });


    test('Verify that selecting a category "Base Layer" in the "Style" option navigates to the page with products of that category', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();

        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT);

        await bottomsWomenPage.clickWomenBottomsOptionStyle();
        await bottomsWomenPage.clickCategoryStyle(0);

        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_STYLE_BASE_LAYER_PAGE_END_POINT);
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

    test('Women/Bottoms/Shopping options/Price filter is displayed', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

          await homePage.hoverWomenMenuitem();
          await homePage.clickBottomsWomenLink();
          await bottomsWomenPage.clickOptionPrice();
    
          await expect(bottomsWomenPage.locators.getOptionPriceFilter()).toBeVisible();
    })

    test.skip("Verify a User can deselect all options at once", async ({ page }) => {
        const homePage = new HomePage(page);
        const womenPage = await homePage.clickWomenLink();
        const bottomsWomenPage = await womenPage.clickWomenBottomsLinkFromShopByCategory();

        await bottomsWomenPage.clickShoppingOptionsMaterial();
        await bottomsWomenPage.clickShoppingOptionsMaterialOrganicCotton();
        await bottomsWomenPage.clickShoppingOptionsPrice();
        await bottomsWomenPage.clickShoppingOptionsPriceSecondSubCategory();        

        const listOfSelectedItems = page.locator(".filter-current");
        await bottomsWomenPage.clickClearAllButton();
    
        await expect(listOfSelectedItems).not.toBeVisible();
    });
    test('On the page Bottoms - Womens page there are 5 options for sizes 28, 29, 30, 31, 32.', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.hoverWomenMenuitem();
        const bottomsWomenPage = await homePage.clickBottomsWomenLink();
        await bottomsWomenPage.clickWomenBottomsOptionSize();
        for (let index = 0; index < WOMEN_BOTTOMS_SIZE.length; index++) {
            await expect(bottomsWomenPage.locators.getWomenBottomsLocatorsSize().nth(index)).toHaveText(WOMEN_BOTTOMS_SIZE[index]);
        }
        expect(await bottomsWomenPage.locators.getWomenBottomsLocatorsSize().count()).toBe(5);
      });
});