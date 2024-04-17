import {test, expect} from "@playwright/test"


test.describe('previewProductCard', () => {
   test('photoProduct', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/fusion-backpack.html');

    const photoBlue = page.locator('.fotorama__stage img[aria-hidden="false"]').first();
    await expect(photoBlue).toBeVisible();
    
    });
})