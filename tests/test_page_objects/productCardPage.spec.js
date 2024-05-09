import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import ProductCardPage from "../../page_objects/productCardPage.js";
import MenTopsPage from "../../page_objects/menTopsPage.js";

test.describe('productCardPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test("Verify that the Product Card has the Related Products section on the Men/Tops page", async ({
        page,
    }) => {
        test.slow();
        const homePage = new HomePage(page);
        const menTopsPage = new MenTopsPage(page);
        const productCardPage = new ProductCardPage(page);
        await homePage.hoverMenLink();
        await homePage.clickMenTopsLink();

        const LIST_OF_PRODUCT_CARD_TITLES = await menTopsPage.locators
            .getListOfProductCardTitles()
            .allInnerTexts();

        for (let i = 0; i < LIST_OF_PRODUCT_CARD_TITLES.length; i++)
        {
            await menTopsPage.clickProductCard(LIST_OF_PRODUCT_CARD_TITLES[i]);
            await expect(
                productCardPage.locators.getRelatedProductsSection()
            ).toBeVisible();
            await expect(
                productCardPage.locators.getRelatedProductsSectionTitle()
            ).toHaveText("Related Products");
            await productCardPage.goBackToMenTopsPage();
        }
    });

    test("Verify Product Card in the Related Products section opens correct page", async ({
        page
    }) => {
        test.slow();
        const homePage = new HomePage(page);

        await homePage.hoverMenLink();
        const menTopsPage = await homePage.clickMenTopsLink();

        const LIST_OF_PRODUCT_CARD_TITLES = await menTopsPage.locators
            .getListOfProductCardTitles()
            .allInnerTexts();

        for (let i = 0; i < LIST_OF_PRODUCT_CARD_TITLES.length; i += 4)
        {
            const productCardPage = await menTopsPage.clickProductCard(LIST_OF_PRODUCT_CARD_TITLES[i]);

            const LIST_OF_RELATED_PRODUCTS = await productCardPage.locators
                .getListOfRelatedProductsTitles()
                .allInnerTexts();
            for (let j = 0; j < LIST_OF_RELATED_PRODUCTS.length; j += 3)
            {
                await productCardPage.openRelatedProductCard(j);
                await expect(
                    productCardPage.locators.getProductCardTitile()
                ).toHaveText(LIST_OF_RELATED_PRODUCTS[j]);
                await productCardPage.goBackToMenTopsPage();
            }

            await productCardPage.goBackToProductCardPage();
        }
    });
})