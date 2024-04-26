import {test, expect} from '@playwright/test'

test.describe ('photoProductInFullScreen', () => {
    test('photo in full screen', async ({page}) => {
        test.slow();
        await page.goto('https://magento.softwaretestingboard.com/fusion-backpack.html');
        const photoGray = page.locator('.fotorama__stage img[aria-hidden="false"]').first();
        await photoGray.click();
        
        await expect(page.locator('.fotorama__img--full[aria-hidden="false"]').first()).toBeVisible();

    });
})