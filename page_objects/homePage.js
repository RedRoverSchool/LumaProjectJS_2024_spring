import WhatsNewPage from "./whatsNewPage.js";
import WomenPage from "./womenPage.js";

class HomePage {
    constructor(page) {
        this.page = page
    }

    locators = {
        getWhatsNewLink: () => this.page.getByRole('listitem').filter({ hasText: "What's New" }),
        getWomenLink: () => this.page.locator(".nav-sections .navigation li a[href$='/women.html']")
    }

    async open() {
        await this.page.goto('/')
    }

    async clickWhatsNewLink() {
        await this.locators.getWhatsNewLink().click();

        return new WhatsNewPage(this.page);
    }

    async clickWomenLink() {
        await this.locators.getWomenLink().click();

        return new WomenPage(this.page);
    }
}
export default HomePage;
