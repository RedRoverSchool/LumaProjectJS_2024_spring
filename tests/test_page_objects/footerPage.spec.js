import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";

import SearchTermPopularPage from "../../page_objects/searchTermPopularPage.js";
import * as tD from "../../helpers/testData.js";

test.describe('footerPage.spec', () => {


    test('link "Search Terms" is clickabel', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchTermPopularPage = new SearchTermPopularPage(page)

        await homePage.open();
        await homePage.clickSearchTermsLink();

        await expect(page).toHaveURL(tD.BASE_URL + tD.SEARCH_TERMS_POPULAR_PAGE_END_POINT);
        await expect(searchTermPopularPage.locators.getSearchTermPopular()).toContainText(tD.SEARCH_TERMS_POPULAR_HEADER);
    });

});
