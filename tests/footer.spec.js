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

});
