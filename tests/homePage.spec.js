import { test, expect } from "@playwright/test";
import exp from "constants";

test.describe('homePage', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })
    
    test('verify Url on the home page', async({page}) => {
        
        await page.locator('.logo').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com");
    })

    test('goto Yoga Collection page', async({page}) => {
        await page.locator('.block-promo.home-main').click();

        await expect(page).toHaveURL("https://magento.softwaretestingboard.com/collections/yoga-new.html");
    })

    const firstCardURL = 'https://magento.softwaretestingboard.com/radiant-tee.html';

    test('1st card: clicking card image redirects to respective product card', async ({ page }) => {
        await page.getByAltText('Radiant Tee').click();

        await expect(page).toHaveURL(firstCardURL);
        await expect(page.getByRole('heading', {name: 'Radiant Tee'})).toBeVisible();
    })

    test('1st card: clicking card name redirects to respective product cards', async ({ page }) => {
        await page.locator('a[title="Radiant Tee"]').click();

        await expect(page).toHaveURL(firstCardURL);
        await expect(page.getByRole('heading', {name: 'Radiant Tee'})).toBeVisible();
    })

    test('1st card: clicking card reviews redirects to "reviews" tab on respective product card', async ({ page }) => {
        await page.locator('a.action.view[href*="radiant-tee"]').click();

        await expect(page.getByRole('heading', {name: 'Radiant Tee'})).toBeVisible();
        await expect(page.locator('#product-review-container')).toBeVisible();        
    })

    const secondCardURL = 'https://magento.softwaretestingboard.com/breathe-easy-tank.html';

    test('2st card: clicking the card image redirects to the respective product card', async ({ page }) => {
        await page.getByAltText('Breathe-Easy Tank').click();

        await expect(page).toHaveURL(secondCardURL);
        await expect(page.getByRole('heading', {name: 'Breathe-Easy Tank'})).toBeVisible();
    })

    test('2st card: clicking the card name redirects to the respective product card', async ({page}) => {
        await page.locator('a[title="Breathe-Easy Tank"]').click();

        await expect(page).toHaveURL(secondCardURL);
        await expect(page.getByRole('heading', {name: 'Breathe-Easy Tank'})).toBeVisible();
    })

    test('2st card: clicking card reviews redirects to "reviews" tab on respective product card', async ({page}) => {
        await page.locator('a[class="action view"][href*="breathe-easy-tank"]').click();

        await expect(page.getByRole('heading', {name: 'Breathe-Easy Tank'})).toBeVisible();
        await expect(page.locator('#product-review-container')).toBeVisible();        
    })

    const thirdCardURL = 'https://magento.softwaretestingboard.com/argus-all-weather-tank.html';

    test('3rd card: clicking the card image redirects to the respective product card', async ({ page }) => {
        await page.getByAltText('Argus All-Weather Tank').click();

        await expect(page).toHaveURL(thirdCardURL);
        await expect(page.getByRole('heading', {name: 'Argus All-Weather Tank'})).toBeVisible();
    })

    test('3rd card: clicking the card name redirects to the respective product card', async ({ page }) => {
        await page.locator('a[title="Argus All-Weather Tank"]').click();

        await expect(page).toHaveURL(thirdCardURL);
        await expect(page.getByRole('heading', {name: 'Argus All-Weather Tank'})).toBeVisible();
    })

    const fourthCardURL = 'https://magento.softwaretestingboard.com/hero-hoodie.html';

    test('4th card: clicking the card image redirects to the respective product card', async ({ page }) => {
        await page.getByAltText('Hero Hoodie').click();

        await expect(page).toHaveURL(fourthCardURL);
        await expect(page.getByRole('heading', {name: 'Hero Hoodie'})).toBeVisible();
    })

    test('4th card: clicking the card name redirects to the respective product card', async ({ page }) => {
        await page.locator('a[title="Hero Hoodie"]').click()

        await expect(page).toHaveURL(fourthCardURL);
        await expect(page.getByRole('heading', {name: 'Hero Hoodie'})).toBeVisible();
    })

    const fifthCardURL = 'https://magento.softwaretestingboard.com/fusion-backpack.html';

    test('5th card: clicking the card image redirects to the respective product card', async ({page}) => {
        await page.getByAltText('Fusion Backpack').click();

        await expect(page).toHaveURL(fifthCardURL);
        await expect(page.getByRole('heading', {name: 'Fusion Backpack'})).toBeVisible();
    })

    test('5th card: clicking the card name redirects to the respective product card', async ({page}) => {
        await page.locator('a[title="Fusion Backpack"]').click();

        await expect(page).toHaveURL(fifthCardURL);
        await expect(page.getByRole('heading', {name: 'Fusion Backpack'})).toBeVisible();
    })

    test('5th card: clicking card reviews redirects to "reviews" tab on respective product card', async ({page}) => { 
        await page.locator('a[class="action view"][href*="fusion-backpack"]').click();

        await expect(page.getByRole('heading', {name: 'Fusion Backpack'})).toBeVisible();
        await expect(page.locator('#product-review-container')).toBeVisible();
    })

    const sixthCardURL = 'https://magento.softwaretestingboard.com/push-it-messenger-bag.html';

    test('6th card: clicking the card image redirects to the respective product card', async ({page}) => {
        await page.getByAltText('Push It Messenger Bag').click();

        await expect(page).toHaveURL(sixthCardURL);
        await expect(page.getByRole('heading', {name: 'Push It Messenger Bag'})).toBeVisible();
    })

    test('6th card: clicking the card name redirects to the respective product card', async ({page}) => {
        await page.locator('a[title="Push It Messenger Bag"]').click();

        await expect(page.getByRole('heading', {name: 'Push It Messenger Bag'})).toBeVisible();
        await expect(page).toHaveURL(sixthCardURL);
    })

    test('6th card: clicking card reviews redirects to "reviews" tab on respective product card', async ({page}) => { 
        await page.locator('a[class="action view"][href*="push-it-messenger-bag"]').click();

        await expect(page.locator('#product-review-container')).toBeVisible();
        await expect(page.getByRole('heading', {name: 'Push It Messenger Bag'})).toBeVisible();
    })

test('1st card: clicking sizes in order', async ({ page }) => {
    const sizeLabels = ['XS', 'S', 'M', 'L', 'XL'];
    const expectedOutline = 'rgb(153, 153, 153) solid 0.758893px';
    const expectedColor = 'rgb(0, 0, 0)';

    for (const label of sizeLabels) {
        const locator = `.swatch-opt-1556>.swatch-attribute.size>div>div[option-label="${label}"]`;

        await page.locator(locator).click();
        await expect(page.locator(locator)).toHaveCSS('outline', expectedOutline);
        await expect(page.locator(locator)).toHaveCSS('color', expectedColor);
    }
});

})
