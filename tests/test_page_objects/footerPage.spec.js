import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";

import SearchTermPopularPage from "../../page_objects/searchTermPopularPage.js";
import { BASE_URL, SEARCH_TERMS_POPULAR_PAGE_END_POINT } from "../../helpers/testData.js";

test.describe('footerPage.spec', () => {


    test('link "Search Terms" is clickabel', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchTermPopularPage = new SearchTermPopularPage(page)

        await homePage.open();
        await homePage.clickSearchTermsLink();

        await expect(page).toHaveURL(BASE_URL + SEARCH_TERMS_POPULAR_PAGE_END_POINT);
    });

});
