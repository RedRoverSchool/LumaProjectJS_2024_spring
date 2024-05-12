import { test, expect } from "@playwright/test";

test.describe("customerAccount", () => {

  function generateRandomEmail() {
    const mailbox = Math.random().toString(36).substring(2, 10);
    const domain = "example.com";
    return `${mailbox}@${domain}`;
  }
  const BASE_URL = "https://magento.softwaretestingboard.com";

  test.beforeEach(async ({ page }) => {
    test.slow();
    const firstname = "Angelina-Maria";
    const lastname = "O'Neel";
    const email = generateRandomEmail();
    const password = "RT45bb%%mm";

    await page.goto(BASE_URL);
    await page.getByRole("link", { name: "Create an Account" }).click();
    await page.getByRole("textbox", { name: "First Name*" }).click();
    await page.getByRole("textbox", { name: "First Name*" }).fill(firstname);

    await page.getByRole("textbox", { name: "Last Name*" }).click();
    await page.getByRole("textbox", { name: "Last Name*" }).fill(lastname);

    await page.getByRole("textbox", { name: "Email*" }).click();
    await page.getByRole("textbox", { name: "Email*" }).fill(email);

    await page.getByRole("textbox", { name: "Password*", exact: true }).click();
    await page
        .getByRole("textbox", { name: "Password*", exact: true })
        .fill(password);

    await page.getByRole("textbox", { name: "Confirm Password*" }).click();
    await page
        .getByRole("textbox", { name: "Confirm Password*" })
        .fill(password);

    await page.getByRole("button", { name: "Create an Account" }).click();


  });
  test("Customer name is displaied on the home page", async ({ page }) => {
    const greetingMSG = page
        .getByRole("banner")
        .getByText("Welcome, Angelina-Maria O'Neel!");
    await expect(greetingMSG).toBeVisible();
    await expect(greetingMSG).toHaveText("Welcome, Angelina-Maria O'Neel!");

  });
  test("TC 11.6.1_03 | The user is on the page My Account", async ({page}) => {
    await expect(page).toHaveURL(/.*account/);
  });
  test("TC 11.6.1_04 | The user has the option to change the account name, last name, password;", async ({page}) => {

    await page.getByRole("link",{name: "Edit", exact: true}).click();
      await page.getByRole("textbox", { name: "First Name*" }).click();
    await expect(page.getByRole("textbox", { name: "First Name*" })).toBeEditable();

      await page.getByRole("textbox", { name: "Last Name*" }).click();
    await expect(page.getByRole("textbox", { name: "Last Name*" })).toBeEditable();

      await page.getByLabel("Change Password").check();
     await page.getByRole("textbox", { name: "New Password*", exact: true }).click();
    await expect(page.getByRole("textbox", { name: "New Password*", exact: true })).toBeEditable();
  });
  test("TC 11.6.1_05 | The user has the option to change their email address", async ({page}) => {
    await page.getByRole("link",{name:"Edit", exact: true}).click();
    await page.getByLabel("Change Email").check();
    await page.getByRole("textbox", {name: "Email*", exact: true}).click();
    await expect(page.getByRole("textbox", {name: "Email*", exact: true})).toBeEditable();
  });

});
