import TeesWomenPage from "./teesWomenPage";

class WomenPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getWomenTeesLink: () => this.page.getByRole('link', {name: 'Women’s Tees'})
    }

    async clickWomenTeesLink() {
        await this.locators.getWomenTeesLink().click();

        return new TeesWomenPage(this.page);
    }
}

export default WomenPage;