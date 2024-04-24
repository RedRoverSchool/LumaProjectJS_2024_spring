import { test, expect } from "@playwright/test";

test.describe("MyWishList", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const email = "rarara@gmail.com";
    const password = "yEV5Fcg@!hnHRT.";

    await page.getByRole("link", { name: "Sign In" }).click();
    await page.getByRole("textbox", { name: "Email*" }).fill(email);
    await page.getByRole("textbox", { name: "Password*" }).fill(password);
    await page.getByRole("button", { name: "Sign In" }).click();
  });

  test("Customer Account/My Wish List", async ({ page }) => {
    const titleText = "My Wish List";
    const myWishListTitle = await page.locator("h1.page-title");

    await page.locator("div[class='panel header'] span[role='button']").click();
    await page.getByRole("link", { name: "My Wish List" }).click();

    await expect(page.url()).toContain("/wishlist/");
    await expect(myWishListTitle).toBeVisible();
    await expect(myWishListTitle).toHaveText(titleText);
  });

  test("Warning Messages", async ({ page }) => {
    await page.locator("div[class='panel header'] span[role='button']").click();
    await page.getByRole("link", { name: "My Wish List" }).click();

    for (const li of await page
      .getByText("You have no items in your wish list.")
      .all())
      await expect(li).toBeVisible();
  });
});
