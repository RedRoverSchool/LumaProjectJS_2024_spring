import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import Footer from '../../page_objects/footer.js';
import SearchTermPopularPage from "../../page_objects/searchTermPopularPage.js";
import SignInPage from '../../page_objects/signInPage.js';
import { BASE_URL, SEARCH_TERMS_POPULAR_PAGE_END_POINT, SEARCH_TERMS_POPULAR_PAGE_HEADER, SEARCH_ADVANCED_PAGE_END_POINT, SEARCH_ADVANCED_PAGE_HEADER } from "../../helpers/testData.js";

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

    test('Verify that "Search terms" link redirects to the "Popular Search Terms" page', async ({ page }) => {
        const searchTermPopularPage = await new HomePage(page)
            .getFooter()
            .clickSearchTerms();
        await expect(page).toHaveURL(BASE_URL + SEARCH_TERMS_POPULAR_PAGE_END_POINT);
        await expect(page).toHaveTitle(SEARCH_TERMS_POPULAR_PAGE_HEADER);

        await searchTermPopularPage.getHeader().clickLogoLink();
        await expect(page).toHaveURL(BASE_URL)

        const list = await new HomePage(page).locators.getNavigationMenuItemsList();
        for (const item of await list.all()) {
            await item.click()
            await new Footer(page).clickSearchTerms();
            await expect(page).toHaveURL(BASE_URL + SEARCH_TERMS_POPULAR_PAGE_END_POINT);
            await expect(page).toHaveTitle(SEARCH_TERMS_POPULAR_PAGE_HEADER);
        }
    });

    test('Verify links visibility in the footer for logged-in user', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.open();

        const signInPage = await homePage.clickSignInLink();
        await signInPage.fillFieldEmail();
        await signInPage.fillFieldPassword();

        await signInPage.clickButtonSignIn();
        const footerPage = new Footer(page);
        await expect(footerPage.locators.getSearchTerms()).toBeVisible();
        await expect(footerPage.locators.getPrivacyAndCookiePolicyLink()).toBeVisible();
        await expect(footerPage.locators.getNotesLink()).toBeVisible();
        await expect(footerPage.locators.getAdvancedSearchLink()).toBeVisible();
    });

    test('Link "Advanced Search" is clickable and redirectable', async ({ page }) => {
        const footer = new Footer(page);
        const searchAdvancedPage = await footer.clickAdvancedSearchLink();

        await expect(page).toHaveURL(BASE_URL + SEARCH_ADVANCED_PAGE_END_POINT);
        await expect(searchAdvancedPage.locators.getPageHeader()).toHaveText(SEARCH_ADVANCED_PAGE_HEADER);
      })
});

