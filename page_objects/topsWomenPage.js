class TopsWomenPage {
    constructor (page) {
        this.page = page;
    }

    locators = {
        getWomenTopsPageHeader: () => this.page.getByRole('heading', { name: 'Tops' }),
        getWomenMyWishListHeading: () => this.page.getByRole('heading', { name: 'My Wish List' }),
        getWomenMyWishListEmptyMessage: () => this.page.locator('div.block.block-wishlist .empty'),
        getCategoryFilterOption: () => this.page.getByRole("tab", { name: "Category" }),
        getFilterOptionJacketsLink: () => this.page.getByRole("link", { name: "Jackets" }),        
        getArrayAllItems: () => this.page.locator(".products .product-items .product-item-link").allTextContents(),
        getTextCategoryJacketItems: () => this.page.locator('#narrow-by-list > div.filter-options-item.allow.active > div.filter-options-content > ol > li:nth-child(1) > a > span').innerText(),
        getWomenTopsProductItemsCards: () => this.page.locator('.product-item-info'),
        listWomenTopsAddToMyWishListButtons: () => this.page.locator( 'a.action.towishlist'),

        getTeesCategoryShoppingOptions: () => this.page.locator("[aria-hidden='false'] .items > .item > a").nth(2),
        getSizeShoppingOptions: () => this.page.getByRole("tab", { name: "Size" }),
        getSSizeShoppingOptions: () => this.page.locator("[data-role='content'] [option-label='S']"),
        getColorShoppingOptions: () => this.page.getByRole("tab", { name: "Color" }),
        getPurpleColorShoppingOptions: () => this.page.locator(".filter-options [role='presentation'] [attribute-code='color'] [option-label='Purple']"),
        getShoppingByFilterList: () => this.page.locator(".filter-value"),
        getItemsNameList: () => this.page.locator(".product-item-link"),
        getPurpleColorItem: () => this.page.locator("[aria-label='Color'] [aria-label='Purple']"),
        getSSizeItem: () => this.page.locator("[aria-label='Size'] [aria-label='S']"),
    }

    async clickCategoryFilterOption() {
        await this.locators.getCategoryFilterOption().click();

        return this.page;
    }
    async clickFilterOptionJacketsLink() {
        await this.locators.getFilterOptionJacketsLink().click();

        return this.page;
    }
    async getAllWomenTopsProductCards() {
        return await this.locators.getWomenTopsProductItemsCards().all();
    }
    async getAllProductCardsLength() {
        const arr = await this.getAllWomenTopsProductCards();

        return arr.length - 1;
    }
    async hoverRandomWomenTopsProductItem(index) {
        const productCards =  await this.getAllWomenTopsProductCards();
        await productCards[index].hover();

        return this.page;
    }
    async getAllWomenTopsAddToMyWishListButtons() {
        return await this.locators.listWomenTopsAddToMyWishListButtons().all();
    }
    async getRandomWomenTopsAddToWishListButton(index) {
        const addToWishListButtons = await this.getAllWomenTopsAddToMyWishListButtons();

        return addToWishListButtons[index];
    }
    async clickRandomWomenTopsAddToWishListButton(index) {
        const addToWishListButton =  await this.getAllWomenTopsAddToMyWishListButtons();
        await addToWishListButton[index].click();

        return this.page;
    }

    async clickTeesCategoryShoppingOptions() {
      await this.locators.getTeesCategoryShoppingOptions().click();
      return this;
    }
  
    async clickSizeShoppingOptions() {
      await this.locators.getSizeShoppingOptions().click();
      return this;
    }
  
    async clickSSizeShoppingOptions() {
      await this.locators.getSSizeShoppingOptions().click();
      return this;
    }
  
    async clickColorShoppingOptions() {
      await this.locators.getColorShoppingOptions().click();
      return this;
    }
    async clickPurpleColorShoppingOptions() {
      await this.locators.getPurpleColorShoppingOptions().click();
      return this;
    }
 }

export default TopsWomenPage;