import { THANKS_MESSAGE } from "../helpers/testData";
import MyOrdersPage from "./myOrdersPage";

class MyAccountPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getMyAccountHeader: () => this.page.getByRole('heading', { name: 'My Account' }),
        getThanksMessage: () => this.page.getByRole('alert').getByText(THANKS_MESSAGE),
        getMyOrdersLink: () => this.page.getByRole('link', {name: 'My Orders'}),
    }

    async clickMyOrdersLink() {
        await this.locators.getMyOrdersLink().click();

        return new MyOrdersPage(this.page);
  }

 }

export default MyAccountPage;