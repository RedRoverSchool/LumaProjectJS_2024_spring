import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import Footer from '../../page_objects/footer.js';
import SearchTermPopularPage from "../../page_objects/searchTermPopularPage.js";
import { BASE_URL, SEARCH_TERMS_POPULAR_PAGE_END_POINT, SEARCH_TERMS_POPULAR_PAGE_HEADER } from "../../helpers/testData.js";

test.describe('footer.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify visibility of footer', async({page}) => {
        const footer = new Footer(page);

        expect(footer.locators.getFooter()).toBeVisible();
    })

        test('link "Search Terms" is clickabel', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchTermPopularPage = new SearchTermPopularPage(page)

        await homePage.open();
        await homePage.clickSearchTermPopularLink();

        await expect(page).toHaveURL(BASE_URL + SEARCH_TERMS_POPULAR_PAGE_END_POINT);
        await expect(searchTermPopularPage.locators.getSearchTermPopularHeader()).toContainText(SEARCH_TERMS_POPULAR_PAGE_HEADER);
    });

});

