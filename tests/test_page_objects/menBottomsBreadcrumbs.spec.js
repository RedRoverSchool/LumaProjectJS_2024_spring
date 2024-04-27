import {expect, test} from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {BASE_URL} from "../../helpers/testData.js";
import {
    MEN_BOTTOMS_PAGE_END_POINT,
    MEN_BOTTOMS_BREADCRUMBS_MENU_HOME_TEXT,
    MEN_BOTTOMS_BREADCRUMBS_MENU_MEN_TEXT,
    MEN_BOTTOMS_BREADCRUMBS_MENU_BOTTOMS_TEXT,
    MEN_PAGE_END_POINT
} from "../../helpers/testMenData.js";
import MenPage from "../../page_objects/menPage";
import MenBottomsPage from "../../page_objects/menBottomsPage";

test('Men have breadcrumb navigation on the “Men/Bottoms” page and back', async ({ page }) => {
    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);
    const menPage = new MenPage(page);

    await homePage.open();
    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();

    await expect(page).toHaveURL(MEN_BOTTOMS_PAGE_END_POINT);
    await expect(menBottomsPage.locators.getMenBottomsBreadcrumbs()).toBeVisible();
    await expect(menBottomsPage.locators.getBreadcrumbsMenuHome()).toHaveText(MEN_BOTTOMS_BREADCRUMBS_MENU_HOME_TEXT);
    await expect(menBottomsPage.locators.getBreadcrumbsMenuMen()).toHaveText(MEN_BOTTOMS_BREADCRUMBS_MENU_MEN_TEXT);
    await expect(menBottomsPage.locators.getBreadcrumbsMenuBottoms()).toHaveText(MEN_BOTTOMS_BREADCRUMBS_MENU_BOTTOMS_TEXT);

    await menBottomsPage.clickBreadcrumbsMenuMen();

    await expect(page).toHaveURL(MEN_PAGE_END_POINT);

    await menPage.clickBeadcrumbsMenuHome();

    await expect(page).toHaveURL(BASE_URL);
})