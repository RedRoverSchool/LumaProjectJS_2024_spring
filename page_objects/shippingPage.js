class ShippingPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getShippingAddressHeader: () => this.page.getByText('Shipping Address'),
        getShippingProgressBar: () => this.page.locator('[class = "opc-progress-bar-item _active"]')        
    };

}
export default ShippingPage;