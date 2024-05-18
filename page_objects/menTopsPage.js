import ProductCardPage from "../page_objects/productCardPage.js";
import { 
   LIST_OF_SUB_CATEGORY_ON_MEN_TOPS_PAGE_LOCATORS,
   LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE,
   SHOPPING_OPTIONS_FILTER_VALUE,
} from "../helpers/testData.js";
import {MEN_TOPS_PRICE_LIST_LOCATORS} from "../helpers/testMenData.js";

class MenTopsPage{
   constructor(page){
    this.page = page;
   }

   locators = {
    getMenTopsStyle: () => this.page.getByRole("tab",{name:"Style"}),
    getMenTopsListStyle: () => this.page.locator('a[href*= "men/tops-men.html?style_general"]'),
    getMenTopsCategory: () => this.page.getByRole('tab', { name: 'Category' }),
    getMenTopsListCategory: () => this.page.locator('#narrow-by-list').getByRole('tabpanel'),
    getMenTopsStyleInsulated: () => this.page.locator('a[href*= "men/tops-men.html?style_general=116"]').filter({ hasText: 'Insulated 5 item' }),
    getMenTopsPrice: () => this.page.getByRole('tab', { name: 'Price' }),
    getMenTopsListPrice: () => this.page.locator('#narrow-by-list').getByRole('tabpanel').locator('.item'),
    getMenTopsPriceRange: (index) => this.page.locator(MEN_TOPS_PRICE_LIST_LOCATORS[index]),
    getListOfProductCardTitles: () => this.page.locator('a.product-item-link[href]'),
    getMenTopsPriceListProductQuantity: () => this.page.locator('#narrow-by-list').getByRole('tabpanel').locator('.item').locator('.count'),
    getMenTopsPriceListProductCountPseudoElement: () => this.page.locator('#narrow-by-list').getByRole('tabpanel').locator('.item').locator('.count').first(),
    getCategoryOptions: (ind) => this.page.locator(LIST_OF_SUB_CATEGORY_ON_MEN_TOPS_PAGE_LOCATORS[ind]),
    getLabelForEachCategory: () => this.page.locator('.filter-value').allInnerTexts(),
    getCountForEachCategory: (ind) => this.page.locator(LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE[ind]),
    getCountOfItemsOnEachSubCategory: () => this.page.locator('li[class="item product product-item"]'),
    getNextLink: () => this.page.getByRole('link', { name: 'Next' }),
    getClearAllButton: () => this.page.locator(".action.clear.filter-clear"),
    getToolBarAmountLocator: () => this.page.locator('#toolbar-amount'),
    getSortByLocator: () => this.page.locator('select#sorter.sorter-options').first(),
    getAscOrderLocator: () => this.page.locator('a.action.sorter-action.sort-asc'),
    getProductsPriceLocator: () => this.page.locator('.product-items .price'),
    getDescOrderLocator: () => this.page.locator('a.action.sorter-action.sort-desc'),
    getDescOrderLink: () => this.page.getByRole('link', {name: 'Set Descending Direction'}),
    getShoppingOptionFilterValue: () => this.page.locator(SHOPPING_OPTIONS_FILTER_VALUE),
   };

   async clickMenTopsStyle(){
    await this.locators.getMenTopsStyle().click()

    return this
   };

   async clickMenTopsCategory(){
      await this.locators.getMenTopsCategory().click();
      return new MenTopsPage(this.page);
   };

   async expandMenTopsPriceFilterDropDown(){
      await this.locators.getMenTopsPrice().click();

      return this;
   };

   async applyFirstMenTopsPriceFilter() {
      await this.locators.getMenTopsListPrice().first().click({ timeout: 1000});

      return this;
   }

   async getToolBarAmount() {
      const toolbarAmount = await this.locators.getToolBarAmountLocator().allTextContents();
      
      return toolbarAmount.map(el => el.slice(1, -1)).shift();
   }

   async getMenTopsPriceList(){
      const priceList = await this.locators.getMenTopsListPrice().allInnerTexts();

      return await priceList.map((el) => { 
         const arr = el.trim().replaceAll('\nitem', '').split(' ');
         arr.pop();
         return arr.join(' ');
      });
   }

   async selectSortByPrice() {
      await this.locators.getSortByLocator().selectOption('price');
      await this.page.waitForTimeout(2000);

      return this;
   }

   async clickMenTopsPriceRange(index) {
      await this.locators.getMenTopsPriceRange(index).click();

      return this;
   }

   async getShoppingOptionFilterValues() {
      await this.page.waitForTimeout(2000);
      return await this.locators.getShoppingOptionFilterValue().allTextContents();
   }

   async getMinProductItemPrice() {
      await this.selectSortByPrice();
      const productPrice = await this.locators.getProductsPriceLocator().allInnerTexts();

      return Number(productPrice.map(price => price.slice(1))[0]);
   }

   async getMaxProductItemPrice() {
      await this.selectSortByPrice();
      await this.clickGetDescOrderLink();
      const productPrice = await this.locators.getProductsPriceLocator().allInnerTexts();

      return Number(productPrice.map(price => price.slice(1))[0]);
   }

   async getPriceFilterMinThreshold() {
      const priceRange = await this.locators.getShoppingOptionFilterValue().allTextContents();

      return Number(priceRange.map(range => range.split(' ').map(el => el.slice(1))).flat()[0]);
   }

   async getPriceFilterMaxThreshold() {
      if (await this.getPriceFilterMinThreshold() != 90) {
         const priceRange = await this.locators.getShoppingOptionFilterValue().allTextContents();

         return Number(priceRange.map(range => range.split(' ').map(el => el.slice(1))).flat().slice(-1));
      } else return Infinity
   }

   async clickProductCard(product) { 
      await this.page.getByText(product).click();

      return new ProductCardPage(this.page);
   }

   async getMenTopsPriceListProductCount(){
      const priceListProductCount = await this.locators.getMenTopsPriceListProductQuantity().allInnerTexts();

      return priceListProductCount.map((item) => item.replaceAll('\nitem', ''));
   }

   async getMenTopsPriceListProductCountPseudoElementBefore(){
      const productCountPseudoElementBefore = await this.locators.getMenTopsPriceListProductCountPseudoElement().evaluate(el => window.getComputedStyle(el, ':before').content);

      return productCountPseudoElementBefore.substring(1, 2);
   }

   async getMenTopsPriceListProductCountPseudoElementAfter(){
      const productCountPseudoElementAfter = await this.locators.getMenTopsPriceListProductCountPseudoElement().evaluate(el => window.getComputedStyle(el, ':after').content);

      return productCountPseudoElementAfter.substring(1, 2);
   }
   async clickCategoryOption(ind) {
      await this.locators.getCategoryOptions(ind).click();
  
      return this;
    }

    async clickClearAllButton() {
      await this.locators.getClearAllButton().click();
  
      return this;
    }

    async countSubcategoryItems(){
      const count = await this.locators.getCountOfItemsOnEachSubCategory().count();

      return count;
    }

    async clickNextPage(){
      await this.locators.getNextLink().click();
      
      return this;
    }

    async hoverGetDescOrderLink() {
      await this.locators.getDescOrderLink().hover();

      return this.page;
    }

    async clickGetDescOrderLink() {
      await this.locators.getDescOrderLink().click();
      await this.page.waitForTimeout(2000);

      return this.page;
    }
 }
export default MenTopsPage