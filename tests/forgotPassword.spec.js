import { test, expect } from '@playwright/test';
import HomePage from '../page_objects/homePage';
import SignInPage from '../page_objects/signInPage';
import ForgotPasswordPage from '../page_objects/forgotPassword';
import { BASE_URL, FORGOT_YOUR_PASSWORD_PAGE_END_POINT, FORGOT_YOUR_PASSWORD_PAGE_HEADER } from '../helpers/testData';

test.describe('forgotPasswordPage.spec', () => {
    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);
        homePage.open();
        homePage.clickSignInLink();
    });

    test('Verify the Forgot Your Password? link redirects to the Forgot Your Password page', async({ page }) => {
        const signInPage = new SignInPage(page);  
        const forgotPassword = new ForgotPasswordPage(page);
        

        await signInPage.clickForgotPasswordLink();

        await expect(page).toHaveURL(BASE_URL + FORGOT_YOUR_PASSWORD_PAGE_END_POINT);
        await expect(forgotPassword.locators.getPageHeader()).toHaveText(FORGOT_YOUR_PASSWORD_PAGE_HEADER);
    });
});