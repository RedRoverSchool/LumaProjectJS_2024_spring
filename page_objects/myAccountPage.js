import { THANKS_MESSAGE } from "../helpers/testData";
import MyOrdersPage from "./myOrdersPage";
import WomenPage from "./womenPage";

class MyAccountPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getMyAccountHeader: () => this.page.getByRole('heading', { name: 'My Account' }),
        getThanksMessage: () => this.page.getByRole('alert').getByText(THANKS_MESSAGE),
        getMyOrdersLink: () => this.page.getByRole('link', { name: 'My Orders' }),
        getWomenLink: () => this.page.getByText('Women'),
    }

    async clickMyOrdersLink() {
        await this.locators.getMyOrdersLink().click();

        return new MyOrdersPage(this.page);
    }

    async clickWomenLink() {
        await this.locators.getWomenLink().click();

        return new WomenPage(this.page);
    }
    async waitForMyAccountHeader() {
        await this.locators.getMyAccountHeader().waitFor();

        return this;
    }
}

export default MyAccountPage;