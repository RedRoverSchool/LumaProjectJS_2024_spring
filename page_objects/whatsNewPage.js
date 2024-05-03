import HomePage from "./homePage.js";

class WhatsNewPage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getPageHeader: () => this.page.getByRole('heading').first(),
        getLogoLink: () => this.page.getByLabel('store logo'),
        getHeaderText: () => this.page.getByRole('heading', {name: "What's New"}),
        getMenuNewInMens: () => this.page.getByText("New in men's"),
        getNewInMensHoodies: () => this.page.locator('li.item > a[href="https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"]'),
        getNewInMensJackets: () => this.page.locator('li.item > a[href="https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html"]'),
        getNewInMensTees: () => this.page.locator('li.item > a[href ="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html"]'),
        getNewInMensTanks: () => this.page.locator('li.item > a[href ="https://magento.softwaretestingboard.com/men/tops-men/tanks-men.html"]'),
        getNewInMensPants: () => this.page.locator('li.item > a[href ="https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html"]'),
        getNewInMensShorts: () => this.page.locator('li.item > a[href ="https://magento.softwaretestingboard.com/men/bottoms-men/shorts-men.html"]'),
    }

    async clickLogoLink() {
        await this.locators.getLogoLink().click();

        return new HomePage(this.page);
    }
}
export default WhatsNewPage;
