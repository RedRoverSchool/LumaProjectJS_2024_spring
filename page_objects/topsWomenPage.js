import SignInPage from "./signInPage";
import WishListPage from "./wishListPage";

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
        getDisplayModeGrid: () => this.page.getByTitle('Grid', { exact: true }).first(),
        getDisplayModeList: () => this.page.getByTitle('List', { exact: true }).first(),
        getWomenTopsItemsNames: (index) => this.page.locator( `.products-grid li:nth-child(${index}) strong > a`),
        getWomenTopsItemPrices: (index) => this.page.locator( `li:nth-child(${index}) span ~span > span.price`),
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

        return new WishListPage(this.page);
    }
    async clickRandomAddToWishListButtonAndSignIn(index) {
        const addToWishListButton =  await this.getAllWomenTopsAddToMyWishListButtons();
        await addToWishListButton[index].click();

        return new SignInPage(this.page);
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
    async clickDisplayModeGrid() {
        await this.locators.getDisplayModeGrid().click()

        return this.page;
    }
    async clickDisplayModeList() {
        await this.locators.getDisplayModeList().click()

        return this.page;
    }
    async getRandomWomenTopsItemName(index) {
        const womenTopsItemName = await this.locators.getWomenTopsItemsNames(index).innerHTML();
        const itemName = womenTopsItemName.replace('\n','').trim();

        return itemName;
    }
    async getRandomWomenTopsItemPrice(index) {
        const womenTopsItemPrice = await this.locators.getWomenTopsItemPrices(index).innerHTML();
        const itemPrice = womenTopsItemPrice.replace('\n','').trim();

        return itemPrice;
    }

 }

export default TopsWomenPage;