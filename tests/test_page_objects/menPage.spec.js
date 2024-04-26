import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {BASE_URL, MEN_PAGE_HEADER, MEN_PAGE_POINT, COMPARE_PRODUCTS_TEXT, MY_WISH_LIST_TEXT} from "../../helpers/testData.js";
import MenPage from "../../page_objects/menPage";

test('Menu/Men available to click, see clothes only for men', async ({ page }) => {
    const homePage = new HomePage(page);
    const menPage = new MenPage(page);

    await homePage.open();
    await homePage.clickMenLink();

    await expect(page).toHaveURL(BASE_URL + MEN_PAGE_POINT);
    await expect(menPage.locators.getMenPageHeader()).toContainText(MEN_PAGE_HEADER);
    await expect(menPage.locators.getCompareProducts()).toBeVisible(COMPARE_PRODUCTS_TEXT);
    await expect(menPage.locators.getMyWishList()).toBeVisible(MY_WISH_LIST_TEXT);
})