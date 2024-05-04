import { test, expect } from "@playwright/test";
// import HomePage from "../../page_objects/signOut";
import SignInPage from "../../page_objects/signInPage";
import MenBottomsPage from "../../page_objects/menBottomsPage";
import HomePage from "../../page_objects/homePage";
import WishListPage from "../../page_objects/wishListPage";
import PierceGymShortPage from "../../page_objects/pierceGymShortPage";

test.describe('menBottomWishList.spec', () => {

  test.beforeEach(async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.open();

    await homePage.clickSignInLink();

    const signInPage = new SignInPage(page);
    await signInPage.fillFieldEmail();
    await signInPage.fillFieldPassword();
    await signInPage.clickButtonSignIn();
    await page.waitForTimeout(3000);

  })

  test('should be a wish list block with product details displayed on the page', async ({ page }) => {

    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);
    const wishListPage = new WishListPage(page);
    const pierceGym = new PierceGymShortPage(page);

    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();
    await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000)
    await pierceGym.addWishList();
    await expect(wishListPage.locators.getTitleMyWishList()).toBeVisible();
    await expect(wishListPage.locators.getItemQuantity()).toBeTruthy();
  })

  test('should be a link to "Go to the wish list"', async ({ page }) => {
    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);
    const wishListPage = new WishListPage(page);
    const pierceGym = new PierceGymShortPage(page);

    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();
    await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000)
    await pierceGym.addWishList();

    await expect(wishListPage.locators.getgotoWishListlink()).toBeTruthy();
    await expect(wishListPage.locators.getTitleMyWishList()).toHaveCSS('text-align', 'start');
  })

  test('should be a delete item button, a cross', async ({ page }) => {
    const homePage = new HomePage(page);
    const menBottomsPage = new MenBottomsPage(page);
    const wishListPage = new WishListPage(page);
    const pierceGym = new PierceGymShortPage(page);

    await homePage.hoverMenLink();
    await homePage.clickMenBottomsLink();
    await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000)
    await pierceGym.addWishList();

    await expect(wishListPage.locators.getButtonClose()).toBeVisible();
    await wishListPage.clickButtonDelete();
    await expect(wishListPage.locators.getTitleNoItems()).toBeVisible();
  })
})
