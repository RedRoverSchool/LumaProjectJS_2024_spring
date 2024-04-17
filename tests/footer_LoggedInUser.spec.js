import { test, expect } from "@playwright/test";

test.describe('footer for logged-in user', () => {
    const footerLinksForLoggedInUser = ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search'];
      
    test.beforeEach(async ({page}) => {
      test.setTimeout(120000);
      await page.goto("/");
  
      const dialogContent = page.locator('.fc-dialog-content').first();
      const signInButtonOnHeader = page.locator('.links .authorization-link>a').first();
  
      if(dialogContent) {
        await page.getByRole('button', {name: 'Consent'}).click();
      }
  
      await signInButtonOnHeader.click();
      await expect(page.locator('h1')).toHaveText('Customer Login');
  
      await page.getByRole('textbox', {name: 'Email'}).fill('sokolovasviatlana@gmail.com');
      await page.getByRole('textbox', {name: 'Password'}).fill('April2024');
      await page.getByRole('button', {name: 'Sign In'}).click();
    })
  
    test('TC 02.5.3_03 | Verify links visibility in the footer for logged-in user', async ({page}) => {
          for(const footerLinkText of footerLinksForLoggedInUser) {
        const footerLinkLocator = page.locator(`.page-wrapper footer li:has-text("${footerLinkText}")`);
        await expect(footerLinkLocator).toBeVisible();
      }
    })  
})    