import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, WHATS_NEW_PAGE_END_POINT, WHATS_NEW_PAGE_HEADER, SEARCH_QUERY } from "../../helpers/testData.js";

test.describe('homePage.spec', () => {
    test('verify user can navigate to home page clicking on logo from "What\'s New" page', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        const whatsNewPage = await homePage.clickWhatsNewLink();
        await expect(page).toHaveURL(BASE_URL + WHATS_NEW_PAGE_END_POINT);
        await expect(whatsNewPage.locators.getPageHeader()).toHaveText(WHATS_NEW_PAGE_HEADER);

        await whatsNewPage.clickLogoLink()
        await expect(page).toHaveURL(BASE_URL);
    })

    test('Verify  the automatic search results match the query in the search bar', async ({
        page,
    }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.fillSearchInputField(SEARCH_QUERY);

        expect(await homePage.executeSearchAutocompleteList()).toContain(
            SEARCH_QUERY
        );
    });
})