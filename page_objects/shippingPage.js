import PaymentMethodPage from "./paymentMethodPage";


class ShippingPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getShippingAddressHeader: () => this.page.getByText('Shipping Address'),
        getShippingProgressBar: () => this.page.locator('[class = "opc-progress-bar-item _active"]'),
        getByTypeRadioButton: () => this.page.getByLabel('Table Rate'),
        getStreetNameField: () => this.page.locator('input[name="street[0]"]'),
        getCityField: () => this.page.locator('input[name="city"]'),

        getSelectRegionDropdown: () => this.page.locator('//select[@class = "select"][@name = "region_id"]'),

        getOptionvalue: () => this.page.locator('select[name="region_id"]', { index: 2 }),

        getPostCodeField: () => this.page.locator('input[name = "postcode"]'),
        getPhoneNumberField: () => this.page.locator('input[name="telephone"]'),
        getNextButton: ()=> this.page.getByRole('button', {name: 'Next'})


    };

    async fillStreetNameField(street) {
        await this.locators.getStreetNameField().fill('street');

        return this;
    }

    async fillCityField(city) {
        await this.locators.getCityField().fill(city);

        return this;
    }

    async clickSelectRegionDropdown() {
        await this.locators.getSelectRegionDropdown().click();
        await this.locators.getSelectRegionDropdown().selectOption("Arizona");

        return this;
    }

    
    async fillPostCodeField(code) {
        await this.locators.getPostCodeField().fill(code);

        return this;
    }

    async fillPhoneNumberField(phone_number) {
        await this.locators.getPhoneNumberField().fill(phone_number);

        return this;
    }

    async checkByTypeRadioButton() {
        await this.locators.getByTypeRadioButton().check();

        return this;
    }

    async clickNextButton(){
        await this.locators.getNextButton().click();

        return new PaymentMethodPage(this.page);
    }



}
export default ShippingPage;