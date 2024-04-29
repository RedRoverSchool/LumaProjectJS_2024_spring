import {test, expect} from '@playwright/test';
import HomePage from "../../page_objects/homePage";
import Footer from "../../page_objects/footer";
import PrivacyPolicyPage from "../../page_objects/privacyPolicyPage";
import { NAV_MENU_ITEM_NAMES, NUMBER_NAV_MENU_ITEMS } from "../../helpers/testPrivacyPolicyData";

test.describe('privacyPolicyPage.spec', () => {

    test('Verify the navigation menu has 14 items, and they have correct names', async ({ page }) => {
        const homePage = new HomePage(page);
        const footer = new Footer(page);
        const privacyPolicyPage = new PrivacyPolicyPage(page);

        await homePage.open();
        await footer.clickPrivacyAndCookiePolicyLink();

        await expect(privacyPolicyPage.locators.navMenuItemList()).toHaveCount(NUMBER_NAV_MENU_ITEMS);
        await expect(privacyPolicyPage.locators.navMenuItemList()).toHaveText(NAV_MENU_ITEM_NAMES);    
    });
    
});