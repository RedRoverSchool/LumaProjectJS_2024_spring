import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LIST_STYLE_MEN_TOPS, BASE_URL, MEN_TOPS_PAGE_END_POINT, LIST_CATEGORY_MEN_TOPS } from "../../helpers/testData.js"
import MenTopsPage from "../../page_objects/menTopsPage.js";
test.describe('menTops', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })
    test("Check the name of 14 shopping styles in the Men's/Tops section.", async ({ page }) => {
        const homePage = new HomePage(page)
        const menTopsPage = new MenTopsPage(page)

        await homePage.hoverMenLink()
        await homePage.clickMenTopsLink()
        await menTopsPage.clickMenTopsStyle()
        for (let index = 0; index < LIST_STYLE_MEN_TOPS.length; index++) {
            await expect(menTopsPage.locators.getMenTopsListStyle().nth(index)).toContainText(LIST_STYLE_MEN_TOPS[index])
        }
        await expect(page).toHaveURL(BASE_URL + MEN_TOPS_PAGE_END_POINT)
    });
    test('check quantity of items is displayed', async ({ page }) => {
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
        await page.waitForTimeout(6000);
        await menTopsPage.clickMenTopsCategory();
        LIST_CATEGORY_MEN_TOPS.forEach(item => {
            expect(/\d+/.test(item)).toBe(true)
        })
        await expect(menTopsPage.locators.getMenTopsListCategory()).toBeVisible();
    });
    test('displays the number of available products in the Insulated(5) category', async ({page}) => {
        const homePage = new HomePage(page)
        const menTopsPage = new MenTopsPage(page)

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsStyle();

        await expect(menTopsPage.locators.getMenTopsStyleInsulated()).toBeVisible();
    })
})