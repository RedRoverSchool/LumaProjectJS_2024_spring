import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";
import { BASE_URL, BOTTOMS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER} from "../../helpers/testData.js";

test.describe('bottomsWomenPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify that the user can navigate from the home page to the "Women - Bottoms" page', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();
        
        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT);
        await expect(bottomsWomenPage.locators.getWomenBottomsPageHeader()).toHaveText(WOMEN_BOTTOMS_HEADER);
      });
})