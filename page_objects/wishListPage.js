import TrainingPage from "./trainingPage";

class WishListPage {
    constructor(page) {
        this.page = page;
    }

    locators = {

        getTitleMyWishList: () => this.page.locator('.page-title-wrapper'),
        getItemQuantity: () => this.page.getByText('1 Item').nth(2),
        getTrainingLink: () => this.page.getByRole('menuitem', {name: 'Training'}),
        getMyWishListHeader: () => this.page.locator('span').filter({hasText: 'My Wish List'}),
        getMyWishListItemName: () => this.page.getByText('Push It Messenger Bag Rating'),
        getMyWishListItemNameLocator: () => this.page.locator('.products-grid .product-item-link'),
        getgotoWishListlink: () => this.page.getByRole('link', {name: 'Go to Wish List'}),
        getButtonClose: () => this.page.locator('#wishlist-sidebar').getByRole('link', {name: ' Remove This Item'}),
        getTitleNoItems: () => this.page.locator('#wishlist-view-form').getByText('You have no items in your'),
        getAddToCard: () => this.page.locator('#wishlist-sidebar').getByRole('button', {name: 'Add to Cart'}),
        getSidebarMyWishListItemName: () => this.page.locator('#wishlist-sidebar strong > a > span'),
        getSidebarMyWishListItemPrice: () => this.page.locator('#wishlist-sidebar p span.price'),
        getUpdateMyWishList: () => this.page.getByRole('button', {name: 'Update Wish List'}),
        getSidebarMyWishListItemsCount: () => this.page.getByText('Item(s)'),
        getSidebarMyWishListOneItemCount: () => this.page.getByText('1 Item', {exact : true}),
        getMyWishListItemsName: () => this.page.locator('#wishlist-view-form').locator('strong > a'),
        getMyWishListEmptyMessage: () => this.page.locator('.block-wishlist .block-content div.empty'),
    }

    async clickTrainingLink() {
        await this.locators.getTrainingLink().click();

        return new TrainingPage(this.page);
    }

    async hoverMyWishListItemName() {
        await this.locators.getMyWishListItemName().hover();

        return this;
    }

    async clickButtonDelete() {
        await this.locators.getButtonClose().click();
    }

    async clickAddCard() {
        await this.locators.getAddToCard().click();
    }
    async getFirstSidebarMyWishListItemNameText() {
        const nameElements = this.locators.getSidebarMyWishListItemName();
        const count = await nameElements.count();
        const name = await (count > 1 ? nameElements.first() : nameElements).textContent();

        return name;
    }
    async getFirstSidebarMyWishListItemPriceText() {
        return await this.locators.getSidebarMyWishListItemPrice().first().innerHTML();
    }
    async cleanMyWishListFromSideBar() {
        await this.locators.getUpdateMyWishList().click();
        await this.page.waitForTimeout(3000);

        let itemsCount = await this.locators.getSidebarMyWishListItemsCount();
        let item = await this.locators.getSidebarMyWishListOneItemCount();

        let arr = []
        for( let i=0; i< await itemsCount.count(); i++) {
            arr.push(await itemsCount.nth(i).innerText());
        }
        if (itemsCount && (await itemsCount.count() > 1)) {
            let count = parseInt(arr[1].split(' ')[0])
            for (let i = 0; i < count; i++) {
                const removeItem = await this.locators.getButtonClose().first();
                await removeItem.click();
                await this.page.waitForTimeout(1000);
            }
        } else if (item) {
            const removeItem = await this.locators.getButtonClose();
            await removeItem.click();
            await this.page.waitForTimeout(1000);
        }
    }
    async getLastMyWishListItemNameText() {
        let itemName = await this.locators.getMyWishListItemsName().last()
        itemName = itemName.innerText()

        return itemName;
    }
    async clickUpdateMyWishList() {
        await this.locators.getUpdateMyWishList().click();

        return this;
    }
}

export default WishListPage;