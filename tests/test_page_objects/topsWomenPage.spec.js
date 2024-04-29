import {expect, test} from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import WomenPage from "../../page_objects/womenPage";
import TopsWomenPage from "../../page_objects/topsWomenPage";
import {
    BASE_URL,
    MY_WISH_LIST_EMPTY_MESSAGE,
    TOPS_WOMEN_PAGE_END_POINT,
    JACKET_ITEMS
} from "../../helpers/testData";

test.describe('topWomenPage.spec', () => {
    test('verify message displayed in Wish List Section for Empty Wish List', async ({ page }) => {
        const homePage = new HomePage(page);
        const womenPage = new WomenPage(page);
        const topsWomenPage = new TopsWomenPage(page)

        await homePage.open();
        await homePage.clickWomenLink();
        await womenPage.clickWomenTopsLink();

        await expect(page).toHaveURL(BASE_URL + TOPS_WOMEN_PAGE_END_POINT);
        await expect(topsWomenPage.locators.getWomenMyWishListHeading()).toBeVisible();
        await expect(topsWomenPage.locators.getWomenMyWishListEmptyMessage()).toHaveText(MY_WISH_LIST_EMPTY_MESSAGE);
    });

    test("after applying the filter Jackets, only jackets are displayed on the page", async ({ page }) => {
        const homePage = new HomePage(page);
        const womenPage = new WomenPage(page);
        const topsWomenPage = new TopsWomenPage(page)

        await homePage.open();
        await homePage.clickWomenLink();
        await womenPage.clickWomenTopsLink();
    
        await topsWomenPage.clickCategoryFilterOption();
        await topsWomenPage.clickFilterOptionJacketsLink();
    
        const allItems = await topsWomenPage.locators.getArrayAllItems();          

        const allItemsContainExpectedText = allItems.every((item) => {
        return JACKET_ITEMS.some((keyword) => item.includes(keyword));
        });
    
        expect(allItemsContainExpectedText).toBeTruthy();
      });
});

