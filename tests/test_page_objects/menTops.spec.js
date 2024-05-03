import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LIST_STYLE_MEN_TOPS, BASE_URL, MEN_TOPS_PAGE_END_POINT, LIST_CATEGORY_MEN_TOPS, LIST_LABELS_SUB_CATEGORY, MEN_TOPS_CATEGORY_PAGES_END_POINT} from "../../helpers/testData.js"
import MenTopsPage from "../../page_objects/menTopsPage.js";
import { MEN_TOPS_PRICE_LIST } from "../../helpers/testMenData.js";

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

    test('check Men/Tops price filter drop-down has 8 options', async ({page}) => {
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
        await menTopsPage.clickMenTopsPrice();
        
        expect(await menTopsPage.getMenTopsPriceList()).toEqual(MEN_TOPS_PRICE_LIST);
    });

    test('Verify that user can apply the filter for categories within the Category dd list and reset the filter', async ({page}) =>{
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);

        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();
    
        for(let i = 0; i < LIST_LABELS_SUB_CATEGORY.length; i++){
        await menTopsPage.clickMenTopsCategory();
        await menTopsPage.clickCategoryOption(i);

        const labelLocator = await menTopsPage.locators.getLabelForEachCategory();
       

        await expect(labelLocator).toContain(LIST_LABELS_SUB_CATEGORY[i]);
        expect(page).toHaveURL(MEN_TOPS_CATEGORY_PAGES_END_POINT[i]);
        await menTopsPage.clickClearAllButton();
        await expect(page).toHaveURL(BASE_URL + MEN_TOPS_PAGE_END_POINT);
    }
});

})


    
