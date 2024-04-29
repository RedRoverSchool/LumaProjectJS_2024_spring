class BottomsWomenPage {
    constructor(page) {
        this.page = page;
    }
    locators = {
        getWomenBottomsPageHeader: () => this.page.getByRole('heading', { name: 'Bottoms' }),
        getWomenBottomsOptionStyle: () => this.page.getByRole('tab', { name: 'Style' }),
        getAriaSelectedWomenBottoms: () => this.page.locator('[aria-selected]'),
        getCategoryInStyle: () => this.page.locator('[aria-hidden="false"] .items>.item'),
        getOptionPrice: () => this.page.locator('.filter-options-title').nth(3),
        getOptionPriceFilter: () => this.page.locator('.filter-options-content').nth(3)

    }

    async clickWomenBottomsOptionStyle() {
        await this.locators.getWomenBottomsOptionStyle().click();

        return this;
    }
    async extractAndCompareItems(receivedResult, expectedItems) {
        const extractedItems = receivedResult.map(item => item.replace(/\nitem$/, '').split(' ').slice(0, -1).join(' '));
        const areEqual = JSON.stringify(extractedItems) === JSON.stringify(expectedItems);
        
        return { extractedItems, areEqual };
    }

    async clickOptionPrice(){
        await this.locators.getOptionPrice().click();

        return this;
    }
}
export default BottomsWomenPage;