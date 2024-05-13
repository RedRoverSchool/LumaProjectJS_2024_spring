import { expect } from "@playwright/test";
import { test, loginForNotCompletedChenging } from "./base.js"
import HomePage from "../../page_objects/homePage";
import { NEW_USER_DATA } from "../../helpers/testData";
// import MyAccountPage from "../../page_objects/myAccountPage";
import { TELEPHONE_ERROR_MESSAGE, ERROR_MESSAGE_COLOR } from "../../helpers/testAddNewAddressData";

test.describe('addressBook.spec', () => {    

    test('Miss Phone Number field and verify it has the red sign "This is a required field."', async ({ page, loginForNotCompletedChanging }) => {
        const homePage = new HomePage(page);
        await homePage.clickWelcomeDropdown();
        const myAccount = await homePage.clickMyAccountLink();
        const addNewAddress = await myAccount.clickEditAddressNeverCompletedLink();

        await addNewAddress.fillStreetAddressInputFiels(NEW_USER_DATA.streetAddress);
        await addNewAddress.fillCityInputField(NEW_USER_DATA.city);
        await addNewAddress.clickStateDropdown();
        await addNewAddress.selectOptionFromStateDropdown(NEW_USER_DATA.stateProvince)
        await addNewAddress.fillZipInputField(NEW_USER_DATA.zipCode);
        await addNewAddress.clickSaveAddressBtnAndStayOnTheSamePage();

        await expect(addNewAddress.locators.getTelephoneErrorMessage()).toHaveText(TELEPHONE_ERROR_MESSAGE);
        await expect(addNewAddress.locators.getTelephoneErrorMessage()).toHaveCSS('color', ERROR_MESSAGE_COLOR);
    })
})