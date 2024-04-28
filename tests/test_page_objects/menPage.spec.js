import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR, MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR, } from "../../helpers/testData.js";
import {
    MEN_PAGE_END_POINT,
    MEN_PAGE_HEADER,
    COMPARE_PRODUCTS_TEXT,
    MY_WISH_LIST_TEXT
} from "../../helpers/testMenData.js";
import MenPage from "../../page_objects/menPage";

test.describe('menPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
    });
    test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLink();

        await expect(page).toHaveURL(BASE_URL + MEN_PAGE_END_POINT);
        await expect(menPage.locators.getMenPageHeader()).toContainText(MEN_PAGE_HEADER);
        await expect(menPage.locators.getCompareProducts()).toBeVisible(COMPARE_PRODUCTS_TEXT);
        await expect(menPage.locators.getMyWishList()).toBeVisible(MY_WISH_LIST_TEXT);
    })

    test('Category block contains sub-categories: Tops and Bottoms which are links in blue text', async ({ page }) => {
        const homePage = new HomePage(page);
        const menPage = new MenPage(page);

        await homePage.clickMenLink();

        await expect(menPage.locators.getTopsSubCategoryLink()).toHaveCSS('color', MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR);
        await expect(menPage.locators.getBottomsSubCategoryLink()).toHaveCSS('color', MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR);
    });
});