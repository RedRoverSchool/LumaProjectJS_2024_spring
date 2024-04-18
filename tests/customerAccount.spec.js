import { test, expect } from "@playwright/test";

test.describe("customerAccount", () => {
  const BASE_URL = "https://magento.softwaretestingboard.com";

  test.beforeEach(async ({ page }) => {
    const firstname = "Angelina-Maria";
    const lastname = "O'Neel";
    function generateRandomEmail() {
      const mailbox = Math.random().toString(36).substring(2, 10);
      const domain = "example.com";
      return `${mailbox}@${domain}`;
    }
    const email = generateRandomEmail();
    const password = "RT45bb%%mm";

    await page.goto("/");
    await page.getByRole("link", { name: "Create an Account" }).click();
    await page.getByRole("textbox", { name: "First Name*" }).fill(firstname);
    await page.getByRole("textbox", { name: "Last Name*" }).fill(lastname);
    await page.getByRole("textbox", { name: "Email*" }).fill(email);
    await page
      .getByRole("textbox", { name: "Password*", exact: true })
      .fill(password);
    await page
      .getByRole("textbox", { name: "Confirm Password*" })
      .fill(password);
    await page.getByRole("button", { name: "Create an Account" }).click();
    await page.getByRole("link", { name: "store logo" }).click();
  });

  test("Customer name is displaied on the home page", async ({ page }) => {
    const greetingMSG = page
      .getByRole("banner")
      .getByText("Welcome, Angelina-Maria O'Neel!");
      
    await expect(greetingMSG).toBeVisible();
    await expect(greetingMSG).toHaveText("Welcome, Angelina-Maria O'Neel!");
  });

  test("Verify that clicking on the 'Welcome, username' inscription opens the menu", async ({ page }) => {
    await page.locator("div[class='panel header'] span[role='button']").click();

    await expect(
      page.locator("div[aria-hidden='false'] ul[class='header links']")
    ).toBeVisible();
  });

  test("Verify that clicking on the 'My Account' section name in the menu redirects to the 'My Account' page", async ({ page }) => {
    await page.locator("div[class='panel header'] span[role='button']").click();
    await page.getByRole("link", {name: "My Account"}).click();

    await expect(page).toHaveURL(BASE_URL + '/customer/account/');

    const myAccountPageHeader = page.getByRole("heading", {name: "My Account"})
    await expect(myAccountPageHeader).toBeVisible();
    await expect(myAccountPageHeader).toHaveText("My Account")
  
  });
});
