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


    test('Navigate the "Hoodies and Sweatshirts" page in the Man_s deals from the Sale menu item', async({page}) => {
        
        await page.getByText("Sale").click();
        await page.locator("//ul[2]//li[1]//a[1]").click();
        
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html');
        await expect(page).toHaveTitle("Hoodies & Sweatshirts - Tops - Men");
    }) 

    test("Check navigation and deal section to the Sale page", async ({ page }) => {
        await page.locator('.ui-menu li.nav-6').click();
    
        const dealsLocator = page.locator('.categories-menu span');
        const dealsTextArray = await dealsLocator.allInnerTexts();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/sale.html');
        await expect(page.locator('#page-title-heading')).toBeVisible();
        expect(dealsTextArray).toEqual(sideMenuSections);
    })
});