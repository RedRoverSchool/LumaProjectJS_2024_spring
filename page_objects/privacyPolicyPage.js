class PrivacyPolicyPage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        navMenuItemList: () => this.page.locator('#privacy-policy-nav-content').getByRole('listitem')
    }

}
export default PrivacyPolicyPage;