import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, WHATS_NEW_PAGE_END_POINT, WHATS_NEW_PAGE_HEADER, SEARCH_QUERY, SEARCH_QUERY_UPPERCASE, SEARCH_RESULTS_JACKET_PAGE_END_POINT, SEARCH_VALID_VALUE, SEARCH_RESULTS_JACKET_HEADER, RADIANT_TEE_PAGE_END_POINT, SEARCH_INVALID_VALUE, WARNING_MESSAGE_NO_RESULTS, WOMEN_CATEGORIES, RADIANT_TEE_PAGE_REVIEWS_TAB_END_POINT, BREATHE_EASY_TANK_PAGE_END_POINT, BREATHE_EASY_TANK_PAGE_REVIEWS_TAB_END_POINT, BOTTOMS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER, ARGUS_ALL_WEATHER_TANK_PAGE_END_POINT } from "../../helpers/testData.js";
import SearchResultsJacketPage from "../../page_objects/searchResultsJacketPage.js";
import RadiantTeePage from "../../page_objects/radiantTeePage.js";
import SearchNoResultsPage from "../../page_objects/searchNoResultsPage.js";
import BreatheEasyTankPage from "../../page_objects/breatheEasyTankPage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";
import ArgusAllWeatherTankPage from "../../page_objects/argusAllWeatherTankPage.js";

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

    test('Verify user can make search entered the valid text in the search field', async ({ page }) => {

        const homePage = new HomePage(page);
        const searchResultsJacketPage = new SearchResultsJacketPage(page);

        await homePage.fillSearchInputField(SEARCH_VALID_VALUE);
        await homePage.locators.getSearchButton().click();

        await expect(searchResultsJacketPage.locators.getSearchResultsHeader()).toHaveText(SEARCH_RESULTS_JACKET_HEADER)
        await expect(page).toHaveURL(BASE_URL + SEARCH_RESULTS_JACKET_PAGE_END_POINT);
    });

    test('1st card: clicking card image redirects to respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const radiantTeePage = new RadiantTeePage(page);

        await homePage.clickFirstCardImage();

        await expect(page).toHaveURL(BASE_URL + RADIANT_TEE_PAGE_END_POINT);
        await expect(radiantTeePage.locators.getRadiantTeeHeader()).toBeVisible();
    });

    test('Verify user doesn`t receive the results when make search with invalid text ', async ({ page }) => {

        const homePage = new HomePage(page);
        const searchNoResultsPage = new SearchNoResultsPage(page);

        await homePage.fillSearchInputField(SEARCH_INVALID_VALUE);
        await homePage.locators.getSearchButton().click();
        await expect(searchNoResultsPage.locators.getWarningMessageNoResults()).toHaveText(WARNING_MESSAGE_NO_RESULTS);
        await expect(searchNoResultsPage.locators.getNoResultsInfo()).toBeHidden();
    });

    test("Verify the search button (magnifier) is inactive after the search field is cleared", async ({
        page,
    }) => {
        const homePage = new HomePage(page);

        await homePage.fillSearchInputField(SEARCH_QUERY);
        await expect(homePage.locators.getSearchButton()).not.toHaveAttribute(
            "disabled"
        );

        await homePage.clearSearchInputField();
        await expect(homePage.locators.getSearchButton()).toHaveAttribute(
            "disabled"
        );
    });

    test("Verify user can hover over the title “Women” and see dropdown list with 2 subcategories", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.hoverWomenLink();

        await expect(homePage.locators.getWomenCategories()).toHaveText(WOMEN_CATEGORIES);
    });

    test('1st card: clicking card name redirects to respective product cards', async ({ page }) => {
        const homePage = new HomePage(page);
        const radiantTeePage = new RadiantTeePage(page);

        await homePage.clickFirstCardName();

        await expect(page).toHaveURL(BASE_URL + RADIANT_TEE_PAGE_END_POINT);
        await expect(radiantTeePage.locators.getRadiantTeeHeader()).toBeVisible();
    })

    test('1st card: clicking card reviews redirects to "reviews" tab on respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const radiantTeePage = new RadiantTeePage(page);

        await homePage.clickFirstCardReviews();

        await expect(page).toHaveURL(BASE_URL + RADIANT_TEE_PAGE_REVIEWS_TAB_END_POINT);
        await expect(radiantTeePage.locators.getRadiantTeeReviewsTab()).toBeVisible();
    })

    test('2nd card: clicking the card name redirects to the respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const breatheEasyTankPage = new BreatheEasyTankPage(page);

        await homePage.clickSecondCardName();

        await expect(page).toHaveURL(BASE_URL + BREATHE_EASY_TANK_PAGE_END_POINT);
        await expect(breatheEasyTankPage.locators.getBreatheEasyTankHeader()).toBeVisible();
    })

    test('2nd card: clicking the card image redirects to the respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const breatheEasyTankPage = new BreatheEasyTankPage(page);

        await homePage.clickSecondCardImage();

        await expect(page).toHaveURL(BASE_URL + BREATHE_EASY_TANK_PAGE_END_POINT);
        await expect(breatheEasyTankPage.locators.getBreatheEasyTankHeader()).toBeVisible();
    })

    test('2nd card: clicking card reviews redirects to "reviews" tab on respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const breatheEasyTankPage = new BreatheEasyTankPage(page);

        await homePage.clickSecondCardReviews();

        await expect(page).toHaveURL(BASE_URL + BREATHE_EASY_TANK_PAGE_REVIEWS_TAB_END_POINT);
        await expect(breatheEasyTankPage.locators.getBreatheEasyTankReviewsTab()).toBeVisible();
    })

    test('Verify that the user can navigate from the home page to the "Women - Bottoms" page', async ({ page }) => {
        const homePage = new HomePage(page);
        const bottomsWomenPage = new BottomsWomenPage(page);

        await homePage.hoverWomenMenuitem();
        await homePage.clickBottomsWomenLink();

        await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT);
        await expect(bottomsWomenPage.locators.getWomenBottomsPageHeader()).toHaveText(WOMEN_BOTTOMS_HEADER);
    });

    test('3rd card: clicking the card image redirects to the respective product card', async ({ page }) => {
        const homePage = new HomePage(page);
        const argusAllWeatherTankPage = new ArgusAllWeatherTankPage(page);

        await homePage.clickThirdCardImage();

        await expect(page).toHaveURL(BASE_URL + ARGUS_ALL_WEATHER_TANK_PAGE_END_POINT);
        await expect(argusAllWeatherTankPage.locators.getArgusAllWeatherTankPageHeader()).toBeVisible();
    })
})