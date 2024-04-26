import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import WomenPage from "../../page_objects/womenPage.js";
import { BASE_URL, BOTTOMS_WOMEN_PAGE_END_POINT, TEES_WOMEN_PAGE_END_POINT, TOPS_WOMEN_PAGE_END_POINT, WOMEN_BOTTOMS_HEADER, WOMEN_TOPS_HEADER } from "../../helpers/testData.js";
import TopsWomenPage from "../../page_objects/topsWomenPage.js";
import BottomsWomenPage from "../../page_objects/bottomsWomenPage.js";

test.describe('womenPage.spec', () => {
  test("Navigate to Women's Tees page by clicking Promo link on 'Women' page", async ({ page }) => {
    const homePage = new HomePage(page);
    const womenPage = new WomenPage(page);

    await homePage.open();
    await homePage.clickWomenLink();
    await womenPage.clickWomenTeesLink();

    await expect(page).toHaveURL(BASE_URL + TEES_WOMEN_PAGE_END_POINT);
  });
  test('Links with categories names are located on the page and clickable', async ({ page }) => {
    const homePage = new HomePage(page);
    const womenPage = new WomenPage(page);
    const topsWomenPage = new TopsWomenPage(page)
    const bottomsWomenPage = new BottomsWomenPage(page)
    
    
    await homePage.open();
    await homePage.clickWomenLink();
    await womenPage.clickWomenTopsLink()

    await expect(page).toHaveURL(BASE_URL + TOPS_WOMEN_PAGE_END_POINT)
    await expect(topsWomenPage.locators.getWomenTopsPageHeader()).toHaveText(WOMEN_TOPS_HEADER);

    await homePage.clickWomenLink();
    await womenPage.clickWomenBottomsLink()

    await expect(page).toHaveURL(BASE_URL + BOTTOMS_WOMEN_PAGE_END_POINT)
    await expect(bottomsWomenPage.locators.getWomenBottomsPageHeader()).toHaveText(WOMEN_BOTTOMS_HEADER);
    })
});