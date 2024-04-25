import { test, expect } from "@playwright/test"

test.describe('orders and returns page', () => {
    test.beforeEach(async ({page}) => {            
        await page.goto("/");
        await page.locator('.page-wrapper footer li:has-text("Orders and Returns")').click();
    })

    test('Verify Orders and Returns header visibility', async ({page}) => {
        await expect(page.locator("h1")).toHaveText("Orders and Returns");
        await expect(page.locator("h1")).toBeVisible();
    })

    test('Verify Order Information block with input fields is visible', async ({page}) => {
        await expect(page.locator('fieldset>legend')).toBeVisible();
        await expect(page.locator('fieldset>legend')).toHaveText("Order Information");
        await expect(page.getByText('Order ID')).toBeVisible();
        await expect(page.getByRole('textbox', {name: 'Billing Last Name'})).toBeVisible();
        await expect(page.getByText('Find Order By')).toBeVisible();
        await expect(page.getByRole('textbox', {name: 'Email'})).toBeVisible();

        await page.getByText('Find Order By').selectOption('ZIP Code');
        await expect(page.getByRole('textbox', {name: 'Billing ZIP Code'})).toBeVisible();           
    })

    test('Check error message when entering incorrect data', async ({page}) => {
        const errorText = page.locator('.error>div');
        const buttonContinue = page.locator(".primary>button.primary");  

        await page.locator('.control>input').nth(1).fill('0000000');
        await page.locator('.control>input').nth(2).fill('Mike Omer');
        await page.locator('.control>input').nth(3).fill('testinvalid@error.cc');
        await buttonContinue.click();

        await expect(errorText).toHaveText("You entered incorrect data. Please try again.");
        await expect(errorText).toBeVisible();
        await expect(errorText).toHaveCSS('color', 'rgb(224, 43, 39)');
    })

    test('Check error message for required fields', async ({page}) => {
        const buttonContinue = page.locator(".primary>button.primary");  
        const errorMessage = page.locator('.required>div>div'); 

        await page.locator('.page-wrapper footer li:has-text("Orders and Returns")').click();

        await buttonContinue.waitFor(); 
        await expect(buttonContinue).toBeVisible(); 
        await buttonContinue.click();
       
        for(let i = 0; i < 3; i++) {
            await expect(errorMessage.nth(i)).toHaveText('This is a required field.');
            await expect(errorMessage.nth(i)).toHaveCSS('color', 'rgb(224, 43, 39)');
        }     
    })
})