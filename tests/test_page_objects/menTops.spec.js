import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {LIST_STYLE_MEN_TOPS,BASE_URL,MEN_TOPS_PAGE_END_POINT,LIST_CATEGORY_MEN_TOPS} from "../../helpers/testData.js"
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
    const homePage = new HomePage(page)
    const menTopsPage = new MenTopsPage(page)

    await homePage.hoverMenLink()
    await homePage.clickMenTopsLink()
    await homePage.clickMenTopsCategory()

   // await page.getByRole('tab', { name: 'Category' }).click();
    //const categOptions = page.locator('#narrow-by-list').getByRole('tabpanel');
    //await page.click(categOptions);
    //const catOptArray = ['Jackets 11 item', 'Hoodies & Sweatshirts 13 item', 'Tees 12 item', 'Tanks 12 item'];
   // catOptArray.forEach(item => {
    //    expect(/\d+/.test(item)).toBe(true)
   // })
    //await expect(categOptions).toBeVisible();
});
})