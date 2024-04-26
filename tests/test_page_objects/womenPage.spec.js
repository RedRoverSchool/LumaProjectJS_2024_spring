import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import WomenPage from "../../page_objects/womenPage.js";
import { BASE_URL, TEES_WOMEN_PAGE_END_POINT } from "../../helpers/testData.js";

test.describe('womenPage.spec', () => {
  test("Navigate to Women's Tees page by clicking Promo link on 'Women' page", async ({ page }) => {
    const homePage = new HomePage(page);
    const womenPage = new WomenPage(page);

    await homePage.open();
    await homePage.clickWomenLink();
    await womenPage.clickWomenTeesLink();

    await expect(page).toHaveURL(BASE_URL + TEES_WOMEN_PAGE_END_POINT);
  });
});