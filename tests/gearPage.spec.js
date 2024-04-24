import { test, expect } from "@playwright/test";

test.describe('gearPage', () => {
    const BAGS_URL = "https://magento.softwaretestingboard.com/gear/bags.html";
    const GEAR_url = 'https://magento.softwaretestingboard.com/gear.html';
    const WATCHES_URL = 'https://magento.softwaretestingboard.com/gear/watches.html';

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('validate Gear/Bags page', async ({ page }) => {
        const bagsButton = page.locator('#ui-id-25')

        await page.getByRole('menuitem', { name: 'Gear' }).hover();
        await expect(bagsButton).toBeVisible();
        await expect(bagsButton).toHaveText('Bags');

        await bagsButton.click();
        await expect(page).toHaveURL(BAGS_URL);
        await expect(page.locator('ol.products.list.items.product-items')).toBeVisible();
    })

    test('TC 07.1.1_02 <Gear/Bags> Verify redirection to the Bags Page via HoverOver Gear -> Bags', async ({page}) => {
        await page.locator('#ui-id-6').hover();
        await page.getByRole("menuitem", {name:"Bags"}).click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/gear/bags.html");
        await expect.soft(page).toHaveTitle("Bags - Gear");
        await expect.soft(page.getByRole("heading",{name:"Bags"})).toBeVisible();
    })

    test('Check that filter Shop by category has 3 links', async({page}) => {
        const GEAR_url = 'https://magento.softwaretestingboard.com/gear.html';
        const GearLinks = page.getByText('Bags & Fitness Equipment & Watches');

        await page.goto(GEAR_url); 
        await page.getByText('Shop By');
        await page.getByTitle('Category');

        await expect(page.getByText('Shop By')).toBeVisible;
        await expect(page.getByTitle('Category')).toBeVisible;
        await expect(GearLinks).toBeVisible;
    })

    test('Check that link BAGS redirects to BAGS page', async({page}) => {
        await page.goto(GEAR_url);
        await page.locator('#narrow-by-list2').getByRole('link', { name: 'Bags' }).click();
        
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/gear/bags.html');
    })

    test('Category links display count of items', async({page}) => {
        await page.goto(GEAR_url);
        await page.locator('.count').getByText([14, 11, 9]);

        await expect(page.locator('.count').getByText([14, 11, 9])).toBeTruthy();
    })

    test ('Verify that the link Watches redirects to the Watches page', async({page}) => {
        await page.locator('#ui-id-6').click();
        await page.locator('#narrow-by-list2').getByRole('link', { name: 'Watches' }).click();

        await expect(page).toHaveURL(WATCHES_URL);

    })

    test("Verify that user can navigate to Bags page from the Gear menu", async ({page}) => {
        await page.getByRole('menuitem', {name: 'Gear'}).hover();
        await page.locator("#ui-id-25").click();
    
        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/gear/bags.html');
        await expect(page).toHaveTitle("Bags - Gear");
      })
})
