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



      // await page.getByText('')

    });
    test("dropdown1", async ({ page }) => {
     
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