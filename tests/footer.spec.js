import { test, expect } from "@playwright/test";

test.describe("footer", () => {
  const NOTES_URL =
    "https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion";
  const POLICY_URL =
    "https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode";
  const footerLinks = ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search', 'Orders and Returns'];
  
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("user is redirected to Notes page", async ({ page }) => {
    const pagePromise = page.waitForEvent("popup");

    await page.getByRole("link", { name: "Notes" }).click();
    const pageNotes = await pagePromise;

    await expect(pageNotes).toHaveURL(NOTES_URL);
  });

  test("user is redirected to Privacy Policy page", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy and Cookie Policy" }).click();

    await expect(page).toHaveURL(POLICY_URL);
  });

  test('verify visibility of footer', async({page}) => {
    await expect(page.locator('.page-wrapper footer')).toBeVisible();
  });

  test('Verify visibility of five links in footer', async({page}) => {
    for (const linkText of footerLinks) {
      const linkLocator = page.locator(`.page-wrapper footer li:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
    }
  });

  test('link contact us is visible and clickable', async ({page}) => {
    await page.goto(POLICY_URL);
    const contactUs = page.getByRole('link', {name: 'Contact Us'});
    
    await expect(contactUs).toBeVisible();
    await contactUs.click();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/contact/');
  })

  test('Checking the link Privacy Policy', async({page}) => {
  //  await page.goto("/")
  await expect(page.getByRole('link', {name: 'Privacy and Cookie Policy'})).toBeVisible();
  await page.getByRole('link', {name: 'Privacy and Cookie Policy'}).click();
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode');
  })  
});

test.describe('footer for logged-in user', () => {
  const footerLinksForLoggedInUser = ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search'];
  const notesURLForLoggedInUser = 'https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion';
  const searchTermsURLforLoggedInUser = 'https://magento.softwaretestingboard.com/search/term/popular/';
  const privacyURLforLoggedInUser = 'https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode';
  const advancedSearchURLforLoggedInUser = 'https://magento.softwaretestingboard.com/catalogsearch/advanced/';

  test.beforeEach(async ({page}) => {
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

  test('TC 02.5.3_03 | Verify Notes link redirects logged-in user to the required page', async ({page}) => {
    const pagePromise = page.waitForEvent("popup");
    await page.getByRole('link', {name: 'Notes'}).click();
    const pageNotesForLoggedInUser = await pagePromise;

    await expect(pageNotesForLoggedInUser).toHaveURL(notesURLForLoggedInUser);
  })

  test('TC 02.5.3_03 | Verify footer links redirect logged-in user to the required page', async ({page}) => {
    await page.getByRole('link', {name: "Search Terms"}).click();
    await expect(page).toHaveURL(searchTermsURLforLoggedInUser); 
    
    await page.getByRole('link', {name: "Privacy and Cookie Policy"}).click();
    await expect(page).toHaveURL(privacyURLforLoggedInUser);

    await page.getByRole('link', {name: "Advanced Search"}).click();
    await expect(page).toHaveURL(advancedSearchURLforLoggedInUser);
  }) 

})
  
  

