import {test, expect} from "@playwright/test"


test.describe('photoInHomeMode', () => {
    test('photo in home mode', async ({page}) => {
        await page.goto('https://magento.softwaretestingboard.com/fusion-backpack.html');
        await expect(page.locator('.fotorama__stage .fotorama__active .fotorama__img')).toHaveAttribute("src", /gray/)

        await page.locator('.fotorama__arr--next').click();

        await expect(page.locator('.fotorama__stage .fotorama__active .fotorama__img')).toHaveAttribute("src", /blue/)
    });
})