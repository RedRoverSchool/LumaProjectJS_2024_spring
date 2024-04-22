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
    // const firstCardHeading = page.getByRole('heading', {name: 'Radiant Tee'});

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

    test('Click on the "Erin recommends" block', async({page}) => {
        await page.locator('.block-promo.home-erin').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/collections/erin-recommends.html');
    })   

    test('Redirect to "Whats New" page', async({page}) => {
        await page.getByText("What\'s New").click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/what-is-new.html');
        await expect(page).toHaveTitle("What's New");
    })  


    const expectedColorOutline = 'rgb(195, 64, 0)';
    test('1st card: image changes according to the selected color', async ({ page }) => {
        const colorLables = ['Blue', 'Orange', 'Purple'];
    
        for (const color of colorLables) {
            const locatorForColors = `.swatch-opt-1556>.swatch-attribute.color>div>div[option-label="${color}"]`;
    
            await page.locator(locatorForColors).click();
            await expect(page.locator(locatorForColors)).toHaveCSS('outline-color', expectedColorOutline);
            
            const colorCode = color.toLowerCase();
            const imageUrl = `https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/s/ws12-${colorCode}_main_1.jpg`;
    
            await expect(page.locator(`.product-items > li:first-child a img[src="${imageUrl}"]`)).toBeVisible();
    
        }
    })

    test('2st card: image changes according to the selected color', async ({ page }) => {
        const colorLables2card = ['Purple', 'White', 'Yellow'];

        for(const color2 of colorLables2card) {
            const locatorForColors2card = `.swatch-opt-1812>.swatch-attribute.color>div>div[option-label="${color2}"]`;

            await page.locator(locatorForColors2card).click();
            await expect(page.locator(locatorForColors2card)).toHaveCSS('outline-color', expectedColorOutline);

            const colorCode2 = color2.toLowerCase();
            const imgUrl2card = `https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/w/t/wt09-${colorCode2}_main_1.jpg`;

            await expect(page.locator(`img[src$="${imgUrl2card}"]`)).toBeVisible();
        }
    })

    test('3rd card: image changes according to the selected color', async ({ page }) => {
        const locatorForColors3card = `.product-items>li:nth-child(3)>div>div>div>div:nth-child(2)>div>div`
        
        await page.locator(locatorForColors3card).click();

        await expect(page.locator(locatorForColors3card)).toHaveCSS('outline-color', expectedColorOutline);

        await expect(page.getByAltText('Argus All-Weather Tank')).toBeVisible();

    })

    test('Verify user can make search entered the valid text in the search field', async({page}) => {
        const validText = 'jacket';
        const redirectedPage = 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=jacket';

        await page.locator('#search').fill(validText);
        await page.locator('.actions > button').click();

        await expect(page).toHaveURL(redirectedPage);
        await expect(page).toHaveTitle(`Search results for: '${validText}'`);

    })

    test('Verify user doesn`t receive the results when make search with invalid text ', async({page}) => {
        const inValidText = 'testdghsh';
    
        await page.locator('#search').fill(inValidText);
        await page.locator('.actions > button').click();
    
        const warningMessage = page.locator('.message.notice').getByText(' Your search returned no results. ');
        await expect(warningMessage).toHaveText(' Your search returned no results. ');
    
        const noResultsInfo = page.locator('#toolbar-amount').getByText(' Items ')
        await expect(noResultsInfo).toBeHidden();
    })

    test('4th card: image changes according to the selected color', async ({ page }) => {
        const colorLabels4card = ['Black', 'Gray', 'Green'];

        for(const color4 of colorLabels4card) {
            const locatorForColors4card = `.product-items>li:nth-child(4) .swatch-attribute.color [option-label="${color4}"]`;
            await page.locator(locatorForColors4card).click();
            await expect(page.locator(locatorForColors4card)).toHaveCSS('outline-color', expectedColorOutline);

            const colorCode4 = color4.toLowerCase();
            const imgUrl4card = `https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/7c4c1ed835fbbf2269f24539582c6d44/m/h/mh07-${colorCode4}_main_1.jpg`;

            await expect(page.locator(`img[src$="${imgUrl4card}"]`)).toBeVisible();
        }
    })

    test('Verify that Shop Pants link redirects to the corresponding page', async({page}) => {
        
        await page.locator('.action.more.icon').first().click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/promotions/pants-all.html');
    })
})
