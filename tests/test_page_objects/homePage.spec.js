import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, WHATS_NEW_PAGE_END_POINT, WHATS_NEW_PAGE_HEADER, SEARCH_QUERY, SEARCH_QUERY_UPPERCASE } from "../../helpers/testData.js";

test.describe('homePage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('verify user can navigate to home page clicking on logo from "What\'s New" page', async ({ page }) => {
        const homePage = new HomePage(page);

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

        await homePage.fillSearchInputField(SEARCH_QUERY);

        expect(await homePage.executeSearchAutocompleteList()).toContain(
            SEARCH_QUERY
        );
    });

    test("Verify the search button (magnifier) becomes active after entering one or more letters", async ({
        page,
    }) => {
        const homePage = new HomePage(page);

        await expect(await homePage.locators.getSearchButton()).toHaveAttribute(
            "disabled"
        );
        await homePage.fillSearchInputField(SEARCH_QUERY);
        await expect(homePage.locators.getSearchButton()).not.toHaveAttribute("disabled");
    });

    test('Verify the search field is not case-sensitive', async ({ page }) => {

        const homePage = new HomePage(page);

        await homePage.fillSearchInputField(SEARCH_QUERY);

        const autocompleteListLowerCaseActual = await homePage.executeSearchAutocompleteList();

        await homePage.clearSearchInputField();
        await homePage.fillSearchInputField(SEARCH_QUERY_UPPERCASE);

        const autocompleteListUpperCaseActual =
            await homePage.executeSearchAutocompleteList();

        expect(autocompleteListLowerCaseActual.sort()).toEqual(
            autocompleteListUpperCaseActual.sort()
        );
        expect(autocompleteListLowerCaseActual.length).toEqual(
            autocompleteListUpperCaseActual.length
        );
    });
})