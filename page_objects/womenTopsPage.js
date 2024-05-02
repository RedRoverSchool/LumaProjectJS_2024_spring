import HomePage from "./homePage";

class WomenTopsPage  {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getShoppingOptionsHeading: () => this.page.getByRole('heading', { name: 'Shopping Options' }),
    }

    async clickShoppingOptionsHeading() {
        await this.locators.getShoppingOptionsHeading().click();
    }
}
export default WomenTopsPage;