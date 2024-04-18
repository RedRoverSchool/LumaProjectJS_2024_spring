import { test, expect } from "@playwright/test";

test.describe('footer for logged-in user', () => {
    const footerLinksForLoggedInUser = ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search'];
    const notesURLForLoggedInUser = 'https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion';
    const searchTermsURLforLoggedInUser = 'https://magento.softwaretestingboard.com/search/term/popular/';
    const privacyURLforLoggedInUser = 'https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode';
    const advancedSearchURLforLoggedInUser = 'https://magento.softwaretestingboard.com/catalogsearch/advanced/';
      
    test.beforeEach(async ({page}) => {
      await page.goto("/");
  
      const signInButtonOnHeader = page.locator('.links .authorization-link>a').first();
  
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
    
    test('TC 02.5.3_04 | Verify footer links redirect logged-in user to the required page', async ({page}) => {
      await page.getByRole('link', {name: "Search Terms"}).click();
      await expect(page).toHaveURL(searchTermsURLforLoggedInUser); 
      
      await page.getByRole('link', {name: "Privacy and Cookie Policy"}).click();
      await expect(page).toHaveURL(privacyURLforLoggedInUser);
  
      await page.getByRole('link', {name: "Advanced Search"}).click();
      await expect(page).toHaveURL(advancedSearchURLforLoggedInUser);
      
      const pagePromise = page.waitForEvent("popup");
      await page.getByRole('link', {name: 'Notes'}).click();
      const pageNotesForLoggedInUser = await pagePromise;
  
      await expect(pageNotesForLoggedInUser).toHaveURL(notesURLForLoggedInUser);
    })     
})    