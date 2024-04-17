import { test, expect} from "@playwright/test"; 

test.describe('menuSale', () => {

    const sideMenuSections = ["WOMEN'S DEALS", "MENS'S DEALS", "GEAR DEALS"];

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('TC 04.6.1_01 Redirect To The Sale Page', async ({ page }) => {

        await page.locator('#ui-id-8').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/sale.html');
        await expect(page.locator('#page-title-heading')).toBeVisible();
    })

    test('TC 04.6.1_02 | <Menu/Sale> Verify visibility of sections with discounted items on Sale page', async({page}) => {

        await page.locator('#ui-id-8').click();

        const sideMenuSectionsLocator = page.locator('.categories-menu span');
        const sideMenuSectionsTextArray = await sideMenuSectionsLocator.allInnerTexts();

        expect(sideMenuSectionsTextArray).toEqual(sideMenuSections);
    })

});