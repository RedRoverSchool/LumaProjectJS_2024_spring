class BottomsWomenPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getWomenBottomsPageHeader: () => this.page.getByRole('heading', { name: 'Bottoms' }),
        getWomenBottomsOptionStyle: () => this.page.getByRole('tab', { name: 'Style' }),
        getAriaSelectedWomenBottoms: () => this.page.locator('[aria-selected]'),
        getCategoryInStyle: () => this.page.locator('[aria-hidden="false"] .items>.item'),
        getBottomsCategory: () => this.page.getByText('Category'),
        getBottomsCategoryPants: () => this.page.locator(".filter-options li a[href$='bottoms-women.html?cat=27']"),//getByRole('link', {name: 'Pants'})
        getPantsCategoryLocator: () => this.page.locator('li .filter-value'),
        getBottomsCategoryShorts: () => this.page.locator(".filter-options li a[href$='bottoms-women.html?cat=28']"),
        getShortsCategoryLocator: () => this.page.locator('li .filter-value'),
        getOptionPrice: () => this.page.locator('.filter-options-title').nth(3),
        getOptionPriceFilter: () => this.page.locator('.filter-options-content').nth(3),
        getCategoriesStyle: () => this.page.$$('a[href*=\'style\']'),
        getCountItemsInCategoryStyle: (category) => category.$('span.count')
    }

    async getLocatorInnerText(locator) {
        return locator.innerText();
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

    async clickWomenBottomsCategory() {
        await this.locators.getBottomsCategory().click();

        return this;
    }

    async clickBottomsCategoryPants() {
        await this.locators.getBottomsCategoryPants().click();

        return this;
    }

    async clickBottomsCategoryShorts() {
        await this.locators.getBottomsCategoryShorts().click();

        return this;
    }

    async clickOptionPrice(){
        await this.locators.getOptionPrice().click();

        return this;
    }
}

export default BottomsWomenPage;