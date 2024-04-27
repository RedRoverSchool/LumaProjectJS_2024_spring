import { test, expect } from '@playwright/test';
import HomePage from '../../page_objects/homePage.js';
import Footer from '../../page_objects/footer.js';

test.describe('footer.spec', () => {
    test.beforeEach(async({page}) => {
        const homePage = new HomePage(page);

        await homePage.open();
    })

    test('Verify visibility of footer', async({page}) => {
        const footer = new Footer(page);

        expect(footer.locators.getFooter()).toBeVisible();
    })
})
