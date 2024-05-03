

class ForgotPasswordPage {
    constructor(page) {
        this.page =page;
    }

    locators = {
        getPageHeader: () => this.page.getByRole('heading').first()
    }

    async clickForgotPasswordLink() {
        await this.locators.getForgotPasswordLink().click();
    }
}

export default ForgotPasswordPage;