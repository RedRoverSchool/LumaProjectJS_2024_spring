import { test, expect } from "@playwright/test";

test.describe("customerAccount", () => {

  function generateRandomEmail() {
    const mailbox = Math.random().toString(36).substring(2, 10);
    const domain = "example.com";
    return `${mailbox}@${domain}`;
  }
  const BASE_URL = "https://magento.softwaretestingboard.com";

  test.beforeEach(async ({ page }) => {
    const firstname = "Angelina-Maria";
    const lastname = "O'Neel";
    const email = generateRandomEmail();
    const password = "RT45bb%%mm";

    await page.goto("/");
    await page.getByRole("link", { name: "Create an Account" }).click();
    await page.getByRole("textbox", { name: "First Name*" }).fill(firstname);
    await page.getByRole("textbox", { name: "Last Name*" }).fill(lastname);
    await page.getByRole("textbox", { name: "Email*" }).fill(email);
    await page
      .getByRole("textbox", { name: "Password*", exact: true })
      .fill(password);
    await page
      .getByRole("textbox", { name: "Confirm Password*" })
      .fill(password);
    await page.getByRole("button", { name: "Create an Account" }).click();
    await page.getByRole("link", { name: "store logo" }).click();
  });

  test("Customer name is displaied on the home page", async ({ page }) => {
    const greetingMSG = page
      .getByRole("banner")
      .getByText("Welcome, Angelina-Maria O'Neel!");
      
    await expect(greetingMSG).toBeVisible();
    await expect(greetingMSG).toHaveText("Welcome, Angelina-Maria O'Neel!");
  });

  test("Verify that clicking on the 'Welcome, username' inscription opens the menu", async ({ page }) => {
    await page.locator("div[class='panel header'] span[role='button']").click();

    await expect(
      page.locator("div[aria-hidden='false'] ul[class='header links']")
    ).toBeVisible();
  });

  test("Verify that clicking on the 'My Account' section name in the menu redirects to the 'My Account' page", async ({ page }) => {
    await page.locator("div[class='panel header'] span[role='button']").click();
    await page.getByRole("link", {name: "My Account"}).click();

    await expect(page).toHaveURL(BASE_URL + '/customer/account/');

    const myAccountPageHeader = page.getByRole("heading", {name: "My Account"})
    await expect(myAccountPageHeader).toBeVisible();
    await expect(myAccountPageHeader).toHaveText("My Account")
  
  });

  test("TC 11.6.1_01 | Veryfy that user name is changed", async ({ page}) => {
    const oldUser = {
      firstName: "Angelina-Maria", 
      lastName: "O'Neel"
    }
    
    const newUser = {
      firstName: "Bob", 
      lastName: "Tester"
    }
    const oldNameInGreetingLocator = page.getByRole('banner').getByText("Welcome, Angelina-Maria O'Neel!");  
    const welcomeDropdown = page.locator('[class="panel header"] [role="button"]')
    const myAccountLink = page.getByRole('link', {name: 'My Account'});
    const editLink = page.getByRole('link', {name: 'Edit', exact: true });
    const firstNameInputField = page.getByRole('textbox', {name: 'First Name'});
    const lastNameInputField = page.getByRole('textbox', {name: 'Last Name'}); 
    const saveBtn = page.getByRole('button', {name: 'Save'});
    const nameInContactInformationLocator = page.locator('[class="column main"] div:nth-child(5) [class="box-content"] p');
    const nameInHeaderGreetingLocator = page.getByRole('banner').getByText('Welcome, Bob Tester!');    

    expect(await oldNameInGreetingLocator.innerText()).toEqual(`Welcome, ${oldUser.firstName} ${oldUser.lastName}!`)
    await welcomeDropdown.click();   
    await myAccountLink.click();
    await editLink.click();
    await firstNameInputField.fill(newUser.firstName);
    await lastNameInputField.fill(newUser.lastName);
    await saveBtn.click();
    const contactInformationArray = (await nameInContactInformationLocator.innerText()).split('\n');
    const nameInContactInformation = contactInformationArray[0];    
    await nameInHeaderGreetingLocator.waitFor();
    const nameInHeaderGreeting = await nameInHeaderGreetingLocator.innerText();   
    

    expect(nameInContactInformation).toEqual(newUser.firstName + " " + newUser.lastName);
    expect(nameInHeaderGreeting).toContain(`Welcome, ${newUser.firstName} ${newUser.lastName}!`);    
  })

  test('TC 11.6.1_02 | Change email and password and verify the User can sign in', async ({ page }) => {
    const newUserData = {
      newEmail: generateRandomEmail(),
      oldPassword: "RT45bb%%mm", 
      newPassword: "Bob_Tester"
    }
    const alertMessage = 'You saved the account information.';
    const alertLocator = page.getByRole('alert').getByText('You saved the account information.');
    const nameInContactInformationLocator = page.locator('[class="column main"] div:nth-child(5) [class="box-content"] p');

    await page.locator('[class="panel header"] [role="button"]').click();
    await page.getByRole('link', {name: 'My Account'}).click();   
    await page.locator('[class="nav items"] li:nth-child(7)').click();
    await page.getByRole('checkbox', {name: 'Change Email'}).check();
    await page.getByRole('checkbox', {name: 'Change Password'}).check();
    await page.getByRole('textbox', {name: 'Email'}).fill(newUserData.newEmail);
    await page.getByRole('textbox', {name: 'Current Password'}).fill(newUserData.oldPassword);
    await page.getByRole('textbox', {name: 'New Password'}  ).nth(0).fill(newUserData.newPassword);
    await page.getByRole('textbox', {name: 'Confirm New Password'}).fill(newUserData.newPassword);
    await page.getByRole('button', {name: 'Save'}).click();
    await alertLocator.waitFor();

    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/login/');
    await expect(alertLocator).toHaveText(alertMessage);

    await page.getByRole('textbox', {name: 'Email'}).fill(newUserData.newEmail);
    await page.getByRole('textbox', {name: 'Password'}).fill(newUserData.newPassword);
    await page.getByRole('button', {name: 'Sign in'}).click();
    await nameInContactInformationLocator.waitFor();
    const emailInContactInformation = (await nameInContactInformationLocator.innerText()).split('\n')[1];

    expect(emailInContactInformation).toEqual(newUserData.newEmail);
  })

});
