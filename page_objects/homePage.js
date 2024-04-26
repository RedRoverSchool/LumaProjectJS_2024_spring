import WhatsNewPage from "./whatsNewPage.js";

class HomePage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getWhatsNewLink: () => this.page.getByRole('listitem').filter({ hasText: "What's New" }),
    }

    async open() {
        await this.page.goto('/')
    }

    async clickWhatsNewLink() {
        await this.locators.getWhatsNewLink().click();

        return new WhatsNewPage(this.page);
    }
}
export default HomePage;
