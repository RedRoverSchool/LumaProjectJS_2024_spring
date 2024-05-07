import PrivacyPolicyPage from './privacyPolicyPage';
import SearchTermPopularPage from "././searchTermPopularPage";
import SearchAdvancedPage from './searchAdvancedPage.js';
import { FOOTER_LINKS } from '../helpers/testData';

class Footer {
    constructor(page){
        this.page = page;
    }

    locators = {
        getFooter: () => this.page.locator('.page-wrapper footer'),
        getPrivacyAndCookiePolicyLink: () => this.page.getByRole('link', { name: 'Privacy and Cookie Policy' }),
        getSearchTerms: () => this.page.getByText('Search Terms'),
        getNotesLink: () => this.page.getByRole('link', { name: 'Notes' }),
        getAdvancedSearchLink: () => this.page.getByRole('link', { name: 'Advanced Search'}),
    }

    async clickPrivacyAndCookiePolicyLink() {
        await this.locators.getPrivacyAndCookiePolicyLink().click();

        return new PrivacyPolicyPage(this.page);
    }

    async clickSearchTerms(page) {
        await this.locators.getSearchTerms().click()
        return new SearchTermPopularPage(this.page);
    }

    async clickAdvancedSearchLink() {
        await this.locators.getAdvancedSearchLink().click();

        return new SearchAdvancedPage(this.page);
    }
}

export default Footer;