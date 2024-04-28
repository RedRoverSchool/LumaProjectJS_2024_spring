import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/signOut";
import { email, password } from "../../helpers/testData";
import SignInPage from "../../page_objects/signInPage";

test.describe('signOut.spec', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('/');

  })
  test('should be a greeting with the users name ', async ({page }) => {

        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.clickWhatsNewLink();

        const signInPage = new SignInPage(page);
        await signInPage.fillFieldEmail();
        await signInPage.fillFieldPassword();
        await signInPage.clickButtonSignIn();
        await page.waitForTimeout(3000);

        const isGreetingVisible = new SignInPage(page);
        expect(isGreetingVisible).toBeTruthy();

 })
})