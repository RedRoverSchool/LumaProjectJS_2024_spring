import { THANKS_MESSAGE } from "../helpers/testData";

class MyAccountPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getMyAccountHeader: () => this.page.getByRole('heading', { name: 'My Account' }),
        getThanksMessage: () => this.page.getByRole('alert').getByText(THANKS_MESSAGE)
    }
 }

export default MyAccountPage;