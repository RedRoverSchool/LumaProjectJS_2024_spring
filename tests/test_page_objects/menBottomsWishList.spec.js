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

    await homePage.hoverMenLink();
    const menBottomsPage =await homePage.clickMenBottomsLink();
    const pierceGymShortPage = await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000)
    const wishListPage = await pierceGymShortPage.addWishList();
    await expect(wishListPage.locators.getTitleMyWishList()).toBeVisible();
    expect(wishListPage.locators.getItemQuantity()).toBeTruthy();
  })

  test('should be a link to "Go to the wish list"', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverMenLink();
    const menBottomsPage =await homePage.clickMenBottomsLink();
    const pierceGymShortPage = await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000);
    const wishListPage = await pierceGymShortPage.addWishList();

    await expect(wishListPage.locators.getgotoWishListlink()).toBeTruthy();
    await expect(wishListPage.locators.getTitleMyWishList()).toHaveCSS('text-align', 'start');
  })

  test.skip('should be a delete item button, a cross', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverMenLink();
    const menBottomsPage =await homePage.clickMenBottomsLink();
    const pierceGymShortPage = await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000);
    const wishListPage = await pierceGymShortPage.addWishList();

    await expect(wishListPage.locators.getButtonClose()).toBeVisible();
    await wishListPage.clickButtonDelete();
    await expect(wishListPage.locators.getTitleNoItems()).toBeVisible();
  })

  test.skip(' should be an "Add to Cart" button', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverMenLink();
    const menBottomsPage =await homePage.clickMenBottomsLink();
    const pierceGymShortPage = await menBottomsPage.ckickPierceGymc();
    await page.waitForTimeout(3000)
    const wishListPage = await pierceGymShortPage.addWishList();

    await expect(wishListPage.locators.getAddToCard()).toBeVisible();
    await wishListPage.clickAddCard();
    await expect(pierceGymShortPage.locators.getProductShort()).toBeVisible();

  })
})
