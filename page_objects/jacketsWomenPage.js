import { WOMEN_JACKETS_NAME } from "../helpers/testData";
import InezFullZipJacketPage from "./inezFullZipJacketPage";

class JacketsWomenPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getWomenJacketsName: () => this.page.getByRole('link', { name: `${WOMEN_JACKETS_NAME}` }).first(),

    }
    async clickWomenJacketsName() {
        await this.locators.getWomenJacketsName().click();

        return new InezFullZipJacketPage(this.page);
    }
}

export default JacketsWomenPage;