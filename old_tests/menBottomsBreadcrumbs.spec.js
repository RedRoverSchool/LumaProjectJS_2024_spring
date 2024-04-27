import {expect, test} from "@playwright/test";

test.describe('Men/Bottoms/Breadcrumbs', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/');
    })

    test('Men have breadcrumb navigation on the “Men/Bottoms” page and back', async ({ page }) => {
        const breadcrumbMenuMen = page.locator(
            'xpath=//li[@class="item category11"]/a[@href="https://magento.softwaretestingboard.com/men.html"]');
        const breadcrumbMenuHome = page.locator(
            'xpath=//li[@class="item home"]/a[@href="https://magento.softwaretestingboard.com/"]');

        await page.getByRole('menuitem', {name: 'Men'}).last().hover();
        await page.getByRole('menuitem', {name: 'Bottoms'}).click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men/bottoms-men.html');
        await expect(page.locator('//div[@class="breadcrumbs"]')).toBeVisible();
        await expect(page.locator('[class="item home"]')).toHaveText(' Home ');
        await expect(page.locator('[class="item category11"]')).toHaveText(' Men ');
        await expect(page.locator('[class="item category13"]')).toHaveText('Bottoms');

        await breadcrumbMenuMen.click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/men.html');

        await breadcrumbMenuHome.click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com');
    })
})