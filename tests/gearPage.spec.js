import { test, expect } from "@playwright/test";

test.describe('gearPage', () => {
    const BAGS_URL = "https://magento.softwaretestingboard.com/gear/bags.html";

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

})
