class PrivacyPolicyPage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getNavMenuItemList: () => this.page.locator('#privacy-policy-nav-content').getByRole('listitem'),
        getContentHeadersList: () => this.page.locator('h2')       
    };
   

}
export default PrivacyPolicyPage;