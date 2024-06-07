import { test, expect } from "@playwright/test";
test.describe("Sign In Link verification", () => {
  test("Sign In Link redirects to SignIn page", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator(".page-header .authorization-link a").click();

    await expect(page).toHaveURL(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    await expect(
      page.getByRole("heading", { name: "Customer Login" })
    ).toBeVisible();
  });

  test("Sign In with valid credentials", async ({ page }) => {
    const userEmail = "Jane123@gmail.com";
    const userPassw = "Janetest123[";

    await page.goto(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    await page.locator("input[name='login[username]']").fill(userEmail);
    await page.locator("input[name='login[password]']").fill(userPassw);
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.locator(".page-header .logged-in")).toContainText(
      "Welcome"
    );
  });
});
