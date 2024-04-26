import { test, expect } from "@playwright/test";

test.describe('page checkout/cart', () => {

  const whatNewUrl = 'https://magento.softwaretestingboard.com/what-is-new.html';
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

  })

  test('should be cart-summary', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    await page.getByText('Olivia 1/4 Zip Light Jacket').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.locator('#option-label-size-143-item-168').click();
    await page.locator('#option-label-color-93-item-50').click();

    await page.getByRole('button', { name: 'My Cart' }).isVisible();
    await page.click('button[title="Add to Cart"]');
    await page.waitForTimeout(3000);

    await page.click('a.action.showcart');

    await page.getByRole('link', { name: 'View and Edit Cart' }).click();
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/checkout/cart/');

    const cartSummary = page.locator('.cart-summary');
    await expect(cartSummary).toBeVisible();
    await expect(cartSummary).toHaveCSS('float', 'right');

  })
  test('drop-down menu for Estimating shipping and taxes should be opened', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    await page.getByText('Olivia 1/4 Zip Light Jacket').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.locator('#option-label-size-143-item-168').click();
    await page.locator('#option-label-color-93-item-50').click();

    await page.getByRole('button', { name: 'My Cart' }).isVisible();
    await page.click('button[title="Add to Cart"]');
    await page.waitForTimeout(3000);

    await page.click('a.action.showcart');

    await page.getByRole('link', { name: 'View and Edit Cart' }).click();
    await page.getByRole('combobox').click();
    await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
  })

  test('should be cost is displayed at the bottom of the summary', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    await page.getByText('Olivia 1/4 Zip Light Jacket').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.locator('#option-label-size-143-item-168').click();
    await page.locator('#option-label-color-93-item-50').click();

    await page.getByRole('button', { name: 'My Cart' }).isVisible();
    await page.click('button[title="Add to Cart"]');
    await page.waitForTimeout(3000);

    await page.click('a.action.showcart');

    await page.getByRole('link', { name: 'View and Edit Cart' }).click();
    await page.getByRole('combobox').click();

    await page.waitForTimeout(3000)

    await page.getByRole('heading', { name: 'Estimate Shipping and Tax ' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Estimate Shipping and Tax ' })).toBeTruthy();

    await page.getByRole('tab', { name: 'Estimate Shipping and Tax' }).click();

    const countrySelector = 'Country';
    await page.locator(`label:has-text("${countrySelector}") + select`, 'United States');
    await expect(page.locator(`label:has-text("${countrySelector}") + select`, 'United States')).toBeTruthy();

    await page.getByRole('tab', { name: 'Estimate Shipping and Tax' }).click();


    await page.locator('select[name="region_id"]').click()
    await page.waitForTimeout(3000);
    await page.locator('select[name="region_id"]').selectOption('Alabama');

    await page.waitForTimeout(3000);
    await expect(page.locator('select[name="region_id"]').selectOption('Alabama')).toBeTruthy();

    await expect(page.getByRole('row', { name: 'Order Total $' }).getByRole('cell')).toBeVisible();

  })

  test(' buttons [Proceed to Checkout] should start and go to the checkout page', async ({ page }) => {

    await page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    await page.getByText('Olivia 1/4 Zip Light Jacket').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.locator('#option-label-size-143-item-168').click();
    await page.locator('#option-label-color-93-item-50').click();

    await page.getByRole('button', { name: 'My Cart' }).isVisible();
    await page.click('button[title="Add to Cart"]');
    await page.waitForTimeout(3000);

    await page.click('a.action.showcart');

    await page.getByRole('link', { name: 'View and Edit Cart' }).click();
    await page.getByRole('combobox').click();

    await page.getByRole('heading', { name: 'Estimate Shipping and Tax ' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Estimate Shipping and Tax ' })).toBeTruthy();

    await page.getByRole('tab', { name: 'Estimate Shipping and Tax' }).click();

    const countrySelector = 'Country';
    await page.locator(`label:has-text("${countrySelector}") + select`, 'United States');
    await expect(page.locator(`label:has-text("${countrySelector}") + select`, 'United States')).toBeTruthy();

    await page.waitForTimeout(3000);

    await page.getByRole('tab', { name: 'Estimate Shipping and Tax' }).click();

    await page.locator('select[name="region_id"]').click()
    await page.waitForTimeout(3000);
    await page.locator('select[name="region_id"]').selectOption('Alabama');

    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/checkout/#shipping');

  })

    test ('shipping: Verify the rate is fixed for orders to countries other than the USA', async ({ page }) => {

        await page.goto('/emma-leggings.html');
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) {
            await page.getByRole('button', { name: 'Consent' }).click();
        };
        await page.locator('#option-label-size-143-item-171').click();
        await page.locator('#option-label-color-93-item-57').click();
        await page.getByRole('button', {name: 'Add to Cart'}).click();
        await page.waitForTimeout(3000);
        await page.locator('.counter-label').click();
        await page.getByText('View and Edit Cart').click();
        await page.waitForTimeout(3000);

        await page.locator('#block-shipping').first().click();
        const allCountryOptions = await page.locator('#shipping-zip-form select').first().innerText();
        const arrayCountries =  allCountryOptions.split('\n');
        const arrayCountriesFinal = arrayCountries.filter(function(country) {
            return country !== 'United States';
        })
        function getRandomCountry(arrayCountriesFinal) {
            return arrayCountriesFinal[Math.floor(Math.random() * arrayCountriesFinal.length)];
        }
        const randomCountry = getRandomCountry(arrayCountriesFinal);
        await page.locator('#shipping-zip-form select').first().selectOption(randomCountry);
        await page.waitForTimeout(3000);

        await expect(page.getByLabel('Table Rate')).not.toBeVisible();
    })
})