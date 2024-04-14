import { test, expect } from "@playwright/test";

test.describe('Product Card/Add to Wish List', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/customer/account/login/');
        const userEmailValue = 'olga.perepel@gmail.com';
        const userPasswordValue = 'qa2024qa!';
        const emailInput = page.locator('#email');
        const userPassword = page.getByLabel('Password');
        await emailInput.fill(userEmailValue);
        await userPassword.fill(userPasswordValue);
        await page.getByRole('button', { name: 'Sign In'}).click();
        await page.getByText('Women').click();
        await page.getByRole('link', { name: 'Jackets' }).click();
        await  page.getByRole('link', { name: 'Inez Full Zip Jacket' }).first().click();
       //await page.locator('div.swatch-option.text').withText('L').click();
       await page.locator('#option-label-size-143-item-169').click();
        await page.locator('div.swatch-option.color[option-label="Orange"]').click();
        await page.getByRole('button', { name: 'Add to Cart'}).click();
       // await page.locator('.minicart-wrapper').click();
       // await page.getByText('View and Edit Cart').click();



      // await page.getByText('')

    });
    test("Validate link Move to Wish List located on the Shopping Cart page", async ({ page }) => {
      await page.locator('.minicart-wrapper').click();
      await page.locator('.action.showcart').click();

     await expect(page.locator('.action.towishlist.action-towishlist > span')).toBeVisible();
     // await expect()
      })
});

// test('Practice Form/first name', async({page}) => {
//   const firstNameValue = 'Mike';
// const firstNameField = page.getByPlaceholder('First Name');
// await firstNameField.fill(firstNameValue);
// //await page.locator('#firstName').fill('Alena');

// await page.getByPlaceholder('First Name').fill(firstNameValue);

// await expect(page.getByPlaceholder('First Name')).toHaveValue('Mike');

// });

// test('Practice Form/last name', async({page}) => {
//       const lastNameValue = 'Perep';
// const lastNameField = page.getByRole('textbox', {name: 'Last Name'});
// await lastNameField.fill(lastNameValue);
 
// //await page.getByRole(lastNameField).fill(lastNameValue);

// await expect(lastNameField).toHaveValue(lastNameValue);

// });