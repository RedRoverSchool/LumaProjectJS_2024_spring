import { test, expect } from "@playwright/test";

test.describe("customerAccountMyWishListBlock", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
      const email = "losov30082@funvane.com";
      const password = "qwerty123$";
  
      await page.getByRole("link", { name: "Sign In" }).click();
      await page.getByRole("textbox", { name: "Email" }).fill(email);
      await page.getByRole("textbox", { name: "Password" }).fill(password);
      await page.getByRole("button", { name: "Sign In" }).click();
    });

    test("customerAccountMyWishListBlock", async ({ page }) => {
        await expect(page.getByText("Hot Sellers")).toBeVisible();
        const hotSellerProductCard = page.locator(".product-item");
        await hotSellerProductCard.first().hover();
        const hearts = page.locator("a.action.towishlist");
        await hearts.first().click();
        
        expect(page.getByTitle("My Wish List"));

        await page.getByRole("link", { name: "My Account"}).click();
        expect(page.getByTitle("My Account"));
        
        await expect(page.getByRole("link", { name: "Go to Wish List"})).toBeVisible()
    });

})