import PrivacyPolicyPage from './privacyPolicyPage';

class Footer {
    constructor(page){
        this.page = page;
    }

    locators = {
        getFooter: () => this.page.locator('.page-wrapper footer'),
        getPrivacyAndCookiePolicyLink: () => this.page.getByRole('link', { name: 'Privacy and Cookie Policy' })
    }

    async clickPrivacyAndCookiePolicyLink() {
        await this.locators.getPrivacyAndCookiePolicyLink().click();

        return new PrivacyPolicyPage(this.page);
    }
}

export default Footer;