import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import Footer from '../../page_objects/footer.js';
import SearchTermPopularPage from "../../page_objects/searchTermPopularPage.js";
import SignInPage from '../../page_objects/signInPage.js';
import {
    BASE_URL, SEARCH_TERMS_POPULAR_PAGE_END_POINT, SEARCH_TERMS_POPULAR_PAGE_HEADER,
    SEARCH_ADVANCED_PAGE_END_POINT, SEARCH_ADVANCED_PAGE_HEADER, FOOTER_LINK_NAME,
    FOOTER_LINKs_URLs_END_POINTS, FOOTER_ORDERS_AND_RETURNS_PAGE_END_POINT,
    ORDERS_AND_RETURNS_PAGE_FIELDS, NOTES_PAGE_URL
} from "../../helpers/testData.js";

test.describe('footer.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify visibility of footer', async ({ page }) => {
        const footer = new Footer(page);
        
        footer.locators.getFooter().waitFor();
        expect(footer.locators.getFooter()).toBeVisible();
    })

    test('link "Search Terms" is clickabel', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchTermPopularPage = new SearchTermPopularPage(page)

        await homePage.open();
        await homePage.clickSearchTermPopularLink();

        await expect(page).toHaveURL(BASE_URL + SEARCH_TERMS_POPULAR_PAGE_END_POINT);
        await expect(searchTermPopularPage.locators.getSearchTermPopularHeader()).toContainText(SEARCH_TERMS_POPULAR_PAGE_HEADER);
    })

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
    })

    test('Verify links visibility in the footer for logged-in user', async ({ page }) => {
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
    })

    FOOTER_LINK_NAME.forEach((linkName, idx) => {
        test(`Verify ${linkName} is clickable and redirects logged-in user to the required page`, async ({ page }) => {
            const homePage = new HomePage(page);
            const signInPage = await homePage.clickSignInLink();
            await signInPage.fillFieldEmail();
            await signInPage.fillFieldPassword();
            await signInPage.clickButtonSignIn();

            const footerLinkPage = await homePage.getFooter().clickFooterLinks(linkName);
            await expect(page).toHaveURL(BASE_URL + FOOTER_LINKs_URLs_END_POINTS[idx]);
        })
    })

    test('Link "Advanced Search" is clickable and redirectable', async ({ page }) => {
        const footer = new Footer(page);
        const searchAdvancedPage = await footer.clickAdvancedSearchLink();

        await expect(page).toHaveURL(BASE_URL + SEARCH_ADVANCED_PAGE_END_POINT);
        await expect(searchAdvancedPage.locators.getPageHeader()).toHaveText(SEARCH_ADVANCED_PAGE_HEADER);
      })

    test('Verify Notes link is clickable and redirects logged-in user to the required page', async ({page}) => {
        const homePage = new HomePage(page);
        const signInPage = await homePage.clickSignInLink();
        await signInPage.fillFieldEmail();
        await signInPage.fillFieldPassword();
        await signInPage.clickButtonSignIn();

        const pagePromise = page.waitForEvent('popup');
        await homePage.getFooter().clickNotesLink();
        const notesPage = await pagePromise;
        await expect(notesPage).toHaveURL(NOTES_PAGE_URL);       
    }) 
   
    test('"Order and Returns” link redirects to the page, and displays particular fields', async ({ page }) => {
            const footerPage = new Footer(page);
            const ordersAndReturnsPage = await footerPage.clickOrdersAndReturnsLink();
            await expect(page).toHaveURL(BASE_URL + FOOTER_ORDERS_AND_RETURNS_PAGE_END_POINT);
        
            const fields = await footerPage.locators.getOrdersAndReturnsPageFields();
        
            for (let i = 0; i < ORDERS_AND_RETURNS_PAGE_FIELDS.length; i++) {
                const field = fields[i];
                await expect(field).toHaveText(ORDERS_AND_RETURNS_PAGE_FIELDS[i]);
            }
        });
 })