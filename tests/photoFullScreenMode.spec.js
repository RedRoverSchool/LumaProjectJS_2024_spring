import {test, expect} from "@playwright/test"


test.describe('photoFullSCreenMode', () => {
    test('photo in full screen mode', async ({page}) => {
        await page.goto('https://magento.softwaretestingboard.com/fusion-backpack.html'); 

        await page.locator('.fotorama__stage .fotorama__active .fotorama__img').click();

        await expect(page.locator('.fotorama--fullscreen')).toBeVisible();

        await page.locator('.fotorama__arr--next').click();

        await expect(page.locator('.fotorama__stage .fotorama__active .fotorama__img--full')).toHaveAttribute("src", /blue/)
    })
})