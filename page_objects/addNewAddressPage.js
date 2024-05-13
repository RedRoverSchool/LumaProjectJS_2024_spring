class AddNewAddressPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getPhoneNumberInputFiels: () => this.page.locator('#telephone'),
        getStreetAddressInputFiels: () => this.page.locator('#street_1'),
        getCityInputField: ()  => this.page.locator('#city'),
        getStateDropDown: () => this.page.locator('#region_id'),   
        getZipInputField: () => this.page.locator('#zip'),
        getSaveAddressBtn: () => this.page.getByRole('button', {name: 'Save Address'}),
        getTelephoneErrorMessage: () => this.page.locator('#telephone-error'),

    }

    async fillStreetAddressInputFiels(street) {
        await this.locators.getStreetAddressInputFiels().fill(street);

        return this;
    }

    async fillCityInputField(city) {
        await this.locators.getCityInputField().fill(city);

        return this;
    }

    async clickStateDropdown() {
        await this.locators.getStateDropDown().click();
        
        return this;
    }

    async selectOptionFromStateDropdown(stateName) {
        await this.locators.getStateDropDown().selectOption({label: stateName})

        return this;
    }

    async fillZipInputField(zip) {
        await this.locators.getZipInputField().fill(zip);

        return this;
    }

    async clickSaveAddressBtnAndStayOnTheSamePage() {
        await this.locators.getSaveAddressBtn().click();

        return this;
    }
}
export default AddNewAddressPage;