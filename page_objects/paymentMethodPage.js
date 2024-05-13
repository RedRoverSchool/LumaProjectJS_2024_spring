
import CheckoutOnepageSuccessPage from "./checkoutOnepageSuccessPage";

class PaymentMethodPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getPlaceOrderButton: () => this.page.getByRole('button', { name: 'Place Order' })
    }

    async waitPlaceOrderButton() {
        await this.locators.getPlaceOrderButton().waitFor();

        return this;
    }

    async clickPlaceOrderButton() {
        await this.locators.getPlaceOrderButton().click();

        return new CheckoutOnepageSuccessPage(this.page);
    }
}

export default PaymentMethodPage;