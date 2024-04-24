import { test, expect } from "@playwright/test";

test.describe('US Cart/Checkout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('TC 09_2_06 <Cart/Checkout> User able to type in their First Name', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByRole('button', { name: 'Add to Cart' }).first().click();


        await page.locator(".showcart .counter-number").click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'First Name' }).click();
        await page.getByLabel('First Name').fill('Nata');
        await expect(page.locator('#shipping-new-address-form input[name="firstname"]')).toHaveValue('Nata');
    })

    test.skip('TC 09.2_07 <Cart/Checkout> User able to type in Last Name', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByRole('button', { name: 'Add to Cart' }).first().click();

        await page.locator(".showcart .counter-number").click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'Last Name' }).click();
        await page.getByLabel('Last Name').fill('Smith');

        await expect(page.locator('#shipping-new-address-form input[name="lastname"]')).toHaveValue('Smith');
    })

    test('TC 09.2_08 <Cart/Checkout> Company input field is displayed', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByTitle('Add to Cart').first().click();
        await page.locator('.showcart .counter-number').click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'Company' }).click();

        await expect(page.locator('#shipping-new-address-form input[name="company"]')).toBeVisible()
    });

    test('TC 09.2_01 <Cart/Checkout> Item in Shopping Cart is visible', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByTitle('Add to Cart').first().click();

        await page.locator(".showcart .counter-number").click();
        await page.getByRole('link', { name: 'View and Edit Cart' }).click();

        await expect(page.locator('form.form-cart')).toBeVisible()
    });

    test('TC 09.2_09 <Cart/Checkout> User able to type their Company name', async ({ page }) => {

        await page.getByRole('option', { name: 'XS' }).first().click();
        await page.getByRole('option', { name: 'Blue' }).first().click();
        await page.getByTitle('Add to Cart').first().click();
        await page.locator('.showcart .counter-number').click();
        await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

        await page.locator('#shipping-new-address-form div').filter({ hasText: 'Company' }).click();

        await page.locator('#shipping-new-address-form input[name="company"]').click()
        await page.getByLabel('Company').fill('Flowers')
        await expect(page.locator('#shipping-new-address-form input[name="company"]')).toHaveValue('Flowers')
    })

    test(' Verify that "Email Address" input field is displayed', async ({
        page,
      }) => {
        let Item = page.locator(".product-items").getByRole("listitem").nth(2);
    
        await Item.locator(".product-item-name a").innerText();
        await Item.getByLabel("M").click();
        await Item.getByLabel("Gray").click();
        await Item.getByRole("button").click();
        await page.locator(".showcart .counter-number").waitFor();
        await page.locator(".showcart .counter-number").click();
        await page.locator("#top-cart-btn-checkout").click();
        await page.getByText("Shipping Address", { exact: true }).waitFor();
        await expect(
          page.locator("#customer-email-fieldset div label span").first()
        ).toHaveText("Email Address");
        await expect(
          page.locator("#shipping  .step-content #customer-email")
        ).toBeVisible();
      });

      test("Verify that a User able to type in their email", async ({ page }) => {
        let HeroHoodieItem = page.getByTitle("Hero Hoodie");
        let HeroHoodieSize = page.getByText("L", { exact: true });
        let HeroHoodieColor = page.getByRole(
          "option",
          { name: "Green" },
          { exact: true }
        );
        let btnAddToCart = page.getByRole("button", { name: "Add to Cart" });
        let counterIcon = page.locator(".showcart .counter-number");
        let shopCart = page.getByRole("link", { name: "My cart" });
        let btnCheckout = page.getByRole("button", { name: "Proceed to Checkout" });
        let ShippingAddressText = page.getByText("Shipping Address");
        let emailField = page.locator("#shipping  .step-content #customer-email");
    
        await HeroHoodieItem.click();
        await HeroHoodieSize.click();
        await HeroHoodieColor.click();
        await btnAddToCart.click();
        await counterIcon.waitFor();
        await shopCart.click();
        await btnCheckout.click();
        await ShippingAddressText.waitFor();
        await emailField.fill("a1@gmail.com");
    
        await expect(emailField).toHaveValue("a1@gmail.com");
      });


      test("TC 09.2_05 Verify that User able to click on “Next” button after filling all required input fields", async ({
        page,
      }) => {
        
        const HeroHoodieItem = page.getByTitle("Hero Hoodie");
        const HeroHoodieSize = page.getByText("L", { exact: true });
        const HeroHoodieColor = page.getByRole(
          "option",
          { name: "Green" },
          { exact: true }
        );
        const btnAddToCart = page.getByRole("button", { name: "Add to Cart" });
        const counterIcon = page.locator(".showcart .counter-number");
        const shopCart = page.getByRole("link", { name: "My cart" });
        const btnCheckout = page.getByRole("button", {
          name: "Proceed to Checkout",
        });
        const ShippingAddressText = page.getByText("Shipping Address");
        const emailField = page.locator("#shipping  .step-content #customer-email");
        const FirstNameField = page.locator(".control [name='firstname']");
        const LastNameField = page.locator(".control [name='lastname']");
        const StreetAddressField = page.locator(".control [name='street[0]']");
        const CityField = page.locator(".control [name='city']");
        const StateProvinceField = page.locator(".control [name='region_id']");
        const PostalCodeField = page.locator(".control [name='postcode']");
        const CountryField = page.locator(".control [name='country_id']");
        const PhoneNumberField = page.locator(".control [name='telephone']");
        const ShippingMethodsRadioBtn = page.locator(
          ".row [type='radio'][name='ko_unique_1']"
        );
        const btnNext = page.getByRole("button", { name: "Next" });
        const PaymentMethodText = page.locator(".payment-group .step-title");
    
        await HeroHoodieItem.click();
        await HeroHoodieSize.click();
        await HeroHoodieColor.click();
        await btnAddToCart.click();
        await counterIcon.waitFor();
        await shopCart.click();
        await btnCheckout.click();
        await ShippingAddressText.waitFor();
        await emailField.fill("annaS@gmail.com");
        await FirstNameField.fill("Anna");
        await LastNameField.fill("Ivanova");
        await StreetAddressField.fill("Vashington 20");
        await CityField.fill("Chicago");
        await StateProvinceField.selectOption("Illinois");
        await PostalCodeField.fill("C123");
        await CountryField.selectOption("United States");
        await PhoneNumberField.fill("134569087");
        await ShippingMethodsRadioBtn.click();
        await btnNext.click();
        await PaymentMethodText.waitFor();
    
        await expect(PaymentMethodText).toBeVisible(); 
        await expect(page).toHaveURL(
          "https://magento.softwaretestingboard.com/checkout/#payment"
        );
       
      });
    })