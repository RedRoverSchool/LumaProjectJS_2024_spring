import { test, expect } from "@playwright/test";
test.describe("customerAccount", () => {
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

    await page.getByRole("link", { name: "store logo" }).click();
  });
  test("Customer name is displaied on the home page", async ({ page }) => {
    const greetingMSG = page
      .getByRole("banner")
      .getByText("Welcome, Angelina-Maria O'Neel!");
    await expect(greetingMSG).toBeVisible();
    await expect(greetingMSG).toHaveText("Welcome, Angelina-Maria O'Neel!");
  });
});
