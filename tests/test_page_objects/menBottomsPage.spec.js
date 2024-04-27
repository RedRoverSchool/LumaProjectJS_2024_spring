import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import MenBottomsPage from "../../page_objects/menBottomsPage.js";
import { BASE_URL, MEN_BOTTOMS_PAGE_END_POINT } from "../../helpers/testData.js";

    test.describe ('menBottomsPage.spec', () => {
    test ("Verify men's bottom tab", async ({ page }) => {

    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);

    await homePage.open();
    await homePage.hoverMenLink();
    await homePage.clickMenBottomsTab();

    await expect(page).toHaveURL(BASE_URL + MEN_BOTTOMS_PAGE_END_POINT);
    await expect(menBottomsPage.locators.getBottomsHeading()).toBeVisible();
  });
  });
  