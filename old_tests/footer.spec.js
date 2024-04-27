import { test, expect } from "@playwright/test";

test.describe("footer", () => {
  const NOTES_URL =
    "https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion";
  const POLICY_URL =
    "https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode";
  const SEARCH_TERMS_URL = 'https://magento.softwaretestingboard.com/search/term/popular/';
  const footerLinks = ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search', 'Orders and Returns'];

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
      await page.getByRole('button', { name: 'Consent' }).click();
    };
  });

  async function clickSearchTerms(page) {
    await page.getByText('Search Terms' ).click()
}

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

  test('verify visibility of footer', async ({ page }) => {
    await expect(page.locator('.page-wrapper footer')).toBeVisible();
  });

  test('Verify visibility of five links in footer', async ({ page }) => {
    for (const linkText of footerLinks) {
      const linkLocator = page.locator(`.page-wrapper footer li:has-text("${linkText}")`);
      await expect(linkLocator).toBeVisible();
    }
  });

  test('link contact us is visible and clickable', async ({ page }) => {
    await page.goto(POLICY_URL);
    const contactUs = page.getByRole('link', { name: 'Contact Us' });

    await expect(contactUs).toBeVisible();
    await contactUs.click();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/contact/');
  })

  test('Checking the link Privacy Policy', async ({ page }) => {
    //  await page.goto("/")
    await expect(page.getByRole('link', { name: 'Privacy and Cookie Policy' })).toBeVisible();
    await page.getByRole('link', { name: 'Privacy and Cookie Policy' }).click();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode');
  })

  test('Verify that the color of the links is blue', async ({ page }) => {
    await page.getByRole('link', { name: 'Search Terms' }).click();

    const searchTermsLocators = await page
      .locator('ul.search-terms .item a')
      .all();

    for (const link of searchTermsLocators) {
      // rgb(0, 107, 180) == HEX #006bb4
      await expect(link).toHaveCSS('color', 'rgb(0, 107, 180)');
    }
  });

  test('Link "Advanced Search" is clickable and redirectable', async ({ page }) => {
    await page.getByRole('link', { name: 'Advanced Search' }).click();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/catalogsearch/advanced/');
    await expect(page.getByRole('heading', { name: 'Advanced Search' })).toBeVisible();
  });

 
  test('Verify that "Search terms" link redirects to the "Popular Search Terms" page', async ({ page }) => {
    clickSearchTerms(page);
    await expect(page).toHaveURL(SEARCH_TERMS_URL);

    const navigationMenuItems = page.getByRole('navigation').getByRole('listitem');

    for (const item of await navigationMenuItems.all()) {
        await item.click();
        clickSearchTerms(page);
        await expect(page).toHaveURL(SEARCH_TERMS_URL);
        expect(page).toHaveTitle('Popular Search Terms');
    }
  });

  test('the “Search” terms link is clickable ', async ({ page }) => {
    await page.locator('a[href="https://magento.softwaretestingboard.com/search/term/popular/"]').click();

    await page.waitForURL('**/search/term/popular/');
    await expect(page.getByRole('heading', { name: 'Popular Search Terms' })).toBeVisible();

  });
  
});
