import { test, expect} from "@playwright/test"; 

test.describe('Create New Customer page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        if (await page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible()) 
            await page.getByRole('button', { name: 'Consent' }).click();
    });

    test('Verify Create New Customer Account page presents an empty forms for Personal Information and Sign-in Information', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        await expect(page.locator('#firstname')).toBeEmpty();
        await expect(page.locator('#lastname')).toBeEmpty();
        await expect(page.locator('#email_address')).toBeEmpty();
        await expect(page.locator('.field.password.required .control #password')).toBeEmpty();
        await expect(page.locator('#password-confirmation')).toBeVisible();
    });

    test.skip('Verify if the Password and Confirm Password do not match "Please enter the same value again." an error message is displayed', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        await page.locator('.field.password.required .control #password').fill('Test2024');
        await page.locator('#password-confirmation').fill('Test2025');
        await page.getByRole('button', {name: 'Create an Account'}).click();

        await expect(page.locator('#password-confirmation-error')).toHaveText('Please enter the same value again.');
    });
    
    test('Verify after clicking the "Create an Account" link redirects the user to the Create New Customer Account page', async ({page}) => {
        await page.getByRole('link',{name: 'Create an Account'}).click();

        await expect(page.locator('.base')).toHaveText('Create New Customer Account');


    })

    test('Verify Password creation follows specified criteria', async ({ page }) => {
        await page.getByRole('link', { name: 'Create an Account' }).click();
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill('Ele');
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill('Nov');
        await page.getByRole('link', { name: 'Create an Account' }).click();
        await page.getByLabel('First Name').click();
        await page.getByLabel('First Name').fill('El');
        await page.getByLabel('Last Name').click();
        await page.getByLabel('Last Name').fill('Nov');
        await page.getByLabel('Email', { exact: true }).click();
        await page.getByLabel('Email', { exact: true }).fill('el@g.com');
        await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Jh');
        await page.getByLabel('Confirm Password').click();
        await page.getByLabel('Confirm Password').fill('Jh');
        
        const actualResult = await page.locator('div#password-error.mage-error').allInnerTexts();

        const expectedResult = "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.";

        expect(actualResult).toEqual([expectedResult]);
  });
});