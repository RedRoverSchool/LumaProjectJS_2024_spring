import WhatsNewPage from "./whatsNewPage.js";
import WomenPage from "./womenPage.js";
import MenPage from "./menPage";
import RadiantTeePage from "./radiantTeePage.js";
import TrainingPage from "./trainingPage.js";
import CreateAccountPage from "./createAccountPage.js";
import MenBottomsPage from "./menBottomsPage";
import MenTopsPage from "./menTopsPage.js";
import BottomsWomenPage from "./bottomsWomenPage.js";
import SearchTermPopularPage from "./searchTermPopularPage.js";
import SalePage from "./salePage.js";
import GearWatchesPage from "./gearWatchesPage.js";
import SignInPage from "./signInPage.js"
import Footer from "./footer.js";
import GearPage from "./gearPage.js";
import GearBagsPage from "./gearBagsPage.js";
import OrdersAndReturnsPage from "./ordersAndReturnsPage.js";
import BreatheEasyTankPage from "./breatheEasyTankPage.js";
import WomenTopsPage from "./womenTopsPage.js";
import ArgusAllWeatherTankPage from "./argusAllWeatherTankPage.js"
import HeroHoodiePage from "./heroHoodiePage.js"
import TopsWomenPage from "./topsWomenPage.js";
import FusionBackpackPage from "./fusionbackpackPage.js";
import PushItMessengerBagPage from "./pushItMessengerBagPage.js";
import MyAccountPage from "./myAccountPage.js";
import GearFitnessPage from "./gearFitnessPage.js";
import { getRandomNumber } from "./../helpers/testUtils.js"
import ProductCardPage from "./productCardPage.js";
import JacketsWomenPage from "./jacketsWomenPage.js";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getWhatsNewLink: () => this.page.getByRole("listitem").filter({ hasText: "What's New" }),
    getWomenLink: () => this.page.locator(".nav-sections .navigation li a[href$='/women.html']"),    
    getWomenItemLink: () => this.page.getByRole("menuitem", { name: "Women" }),
    getMenLink: () => this.page.getByRole('menuitem', { name: 'Men' }).last(),
    getMenBottomsLink: () => this.page.getByRole('menuitem', { name: 'Bottoms' }),
    getSearchInputField: () => this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () => this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () => this.page.locator("#search_autocomplete>ul>li>span:first-child"),
    getSearchButton: () => this.page.locator('button[title="Search"]'),
    getSearchInputField: () => this.page.getByPlaceholder("Search entire store here..."),
    getWaitForAutocompleteSearchItems: () => this.page.waitForSelector("#search_autocomplete>ul>li>span:first-child"),
    getAutocompleteSearchItems: () => this.page.locator("#search_autocomplete>ul>li>span:first-child"),
    getRadiantTee: () => this.page.getByTitle('Radiant Tee'),
    getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
    getCreateAccountLink: () => this.page.getByRole('link', { name: 'Create an Account' }),
    getMenLink: () =>this.page.locator('li.nav-3'),
    getSignInLinck: () => this.page.getByRole('link',{name:'Sign In'}),
    getMenLink: () => this.page.locator('li.nav-3'),
    getMenTopsLink: () => this.page.locator('#ui-id-17'),
    getBottomsWomenLink: () => this.page.getByRole('menuitem', { name: 'Bottoms' }),
    getSearchTermPopularLink: () => this.page.getByRole('link', { name: 'Search Terms' }),
    getFirstCardImage: () => this.page.getByAltText('Radiant Tee'),
    getDropdownWishList: () => this.page.getByRole('banner').getByText('My Account My Wish List Sign'),
    getSaleLink: () => this.page.locator('#ui-id-8'),
    getHotSellersXSSizeButton: () => this.page.getByRole('option', { name: 'XS' }),
    getHotSellersBlueColor: () => this.page.getByRole('option', { name: 'Blue' }),
    getHotSellersAddToCartButton: () => this.page.getByTitle('Add to Cart'),
    getWomenCategories: () => this.page.locator('.nav-2 > ul > li > a'),
    getGearMenuItem: () => this.page.getByRole("menuitem", { name: "Gear" }),
    getGearBagsSubmenuItem: () => this.page.getByRole('menuitem', { name: 'Bags' }),
    getGearWatchesSubmenuItem: () => this.page.getByRole("menuitem", { name: "Watches" }),
    getFirstCardName: () => this.page.locator('a[title="Radiant Tee"]'),
    getNavigationMenuItemsList: () => this.page.getByRole('navigation').getByRole('listitem'),
    getOrdersAndReturnsLink: () => this.page.locator('.page-wrapper footer li:has-text("Orders and Returns")'),
    getGearBagsSubmenuItem: () => this.page.locator("#ui-id-25"),
    getGearBagsLink: () => this.page.getByRole("menuitem").filter({ hasText: "Bags" }),
    getFirstCardReviews: () => this.page.locator('a.action.view[href*="radiant-tee"]'),
    getSecondCardName: () => this.page.locator('a[title="Breathe-Easy Tank"]'),
    getSecondCardImage: () => this.page.getByAltText('Breathe-Easy Tank'),
    getWomenTopsLink: () => this.page.getByRole('menuitem', { name: 'Tops' }),    
    getSecondCardReviews: () => this.page.locator('a[class="action view"][href*="breathe-easy-tank"]'),
    getThirdCardImage: () => this.page.getByAltText('Argus All-Weather Tank'),
    getThirdCardName: () => this.page.locator('a[title="Argus All-Weather Tank"]'),
    getFourthCardName: () => this.page.getByAltText('Hero Hoodie'),
    getFourthCardImage: () => this.page.getByAltText('Hero Hoodie'),
    getFifthCardImage: () => this.page.getByAltText('Fusion Backpack'),
    getFifthCardName: () => this.page.locator('a[title="Fusion Backpack"]'),
    getFifthCardReviews: () => this.page.locator('.action.view[href*="fusion-backpack"]'),
    getSixthCardImage: () => this.page.getByAltText('Push It Messenger Bag'),
    getSixthCardName: () => this.page.locator('a[title="Push It Messenger Bag"]'),
    getSixthCardReviews: () => this.page.locator('a[class="action view"][href*="push-it-messenger-bag"]'),
    getHotSellersCardLink: () => this.page.locator('.product-item-photo'),
    getGreetingName: (name) => this.page.locator('[class="panel header"]').filter({ hasText: `Welcome, ${name}`}),
    getWelcomeDropdown: () => this.page.locator('[class="panel header"] span[role="button"]'),
    getMyAccountLink: () => this.page.getByRole('link', {name: 'My Account'}),
    getGearFitnessEquipmentSubmenuItem: () => this.page.getByRole("menuitem", { name: "Fitness Equipment" }),
    getMainMenuLinks: () => this.page.locator('.level-top.ui-corner-all'),
    getHotSellersSection: () => this.page.getByRole('heading', { name: 'Hot Sellers' }),
    getMainMenuLinks: () => this.page.locator('.level-top.ui-corner-all'),
    getWomenJacketslink: () => this.page.getByRole('menuitem', { name: 'Jackets' })
  };

  async open() {
    await this.page.goto("/");
    if (await this.page.getByRole('dialog', { name: 'This site asks for consent to use your data' }).isVisible())
      await this.page.getByRole('button', { name: 'Consent' }).click();
  }

  async clickWhatsNewLink() {
    await this.locators.getWhatsNewLink().click();

    return new WhatsNewPage(this.page);
  }

  async clickWomenLink() {
    await this.locators.getWomenLink().click();

    return new WomenPage(this.page);
  }

  async clickMenLink() {
    await this.locators.getMenLink().click();

    return new MenPage(this.page);
  }

  async clickTrainingLink() {
    await this.locators.getTrainingLink().click();

    return new TrainingPage(this.page);
  }

  async hoverMenLink() {
    await this.page.waitForTimeout(3000);
    await this.locators.getMenLink().hover();

    return this;
  }

  async clickMenBottomsLink() {
    await this.locators.getMenBottomsLink().click();

    return new MenBottomsPage(this.page);
  }

  async fillSearchInputField(searchQuerry) {
    await this.locators.getSearchInputField().fill(searchQuerry);

    return this;
  }

  async executeSearchAutocompleteList() {
    await this.locators.getWaitForAutocompleteSearchItems();
    const searchAutocompleteList = await this.locators
      .getAutocompleteSearchItems()
      .allInnerTexts();

    return searchAutocompleteList;
  }

  async clearSearchInputField() {
    await this.locators.getSearchInputField().clear();

    return this;
  }

  async clickRadiantTee() {
    await this.locators.getRadiantTee().click();

    return new RadiantTeePage(this.page);
  }

  async clickCreateAccountLink() {
    await this.locators.getCreateAccountLink().click();

    return new CreateAccountPage(this.page);
  }

  async clickMenTopsLink() {
    await this.locators.getMenTopsLink().click();

    return new MenTopsPage(this.page)
  }

  async clickBottomsWomenLink() {
    await this.locators.getBottomsWomenLink().click();

    return new BottomsWomenPage(this.page);
  }

  async hoverWomenMenuitem() {
    await this.page.waitForTimeout(3000);
    await this.locators.getWomenLink().hover();

    return this;
  }

  async clickSearchTermPopularLink() {
    await this.locators.getSearchTermPopularLink().click();

    return new SearchTermPopularPage(this.page);
  }

  async clickFirstCardImage() {
    await this.locators.getFirstCardImage().click();

    return new RadiantTeePage(this.page);
  }

  async clickSignInLink() {
    await this.locators.getSignInLinck().click();

    return new SignInPage(this.page);
  }

  async clickSaleLink() {
    await this.locators.getSaleLink().click();

    return new SalePage(this.page);
  }

  async clickHotSellersXSSizeButton(ind) {
    await this.locators.getHotSellersXSSizeButton().nth(ind).click();

    return this;
  }

  async clickHotSellersBlueColor(ind) {
    await this.locators.getHotSellersBlueColor().nth(ind).click();

    return this;
  }

  async clickHotSellersAddToCartButton(ind) {
    await this.locators.getHotSellersAddToCartButton().nth(ind).click();

    return this;
  }

  async hoverWomenLink() {
    await this.locators.getWomenLink().hover();

    return this;
  }

  async hoverGearMenuItem() {
    await this.locators.getGearMenuItem().hover();

    return this;
  }

  async clickGearWatchesSubmenuItem() {
    await this.locators.getGearWatchesSubmenuItem().click();

    return new GearWatchesPage(this.page);
  }

  async clickFirstCardName() {
    await this.locators.getFirstCardImage().click();

    return new RadiantTeePage(this.page);
  }

  getFooter() {
    return new Footer(this.page);
  }

  async clickGearMenuItem() {
    await this.locators.getGearMenuItem().click();

    return new GearPage(this.page);
  }

  async clickGearBagsSubmenuItem() {
    await this.locators.getGearBagsSubmenuItem().click();

    return new GearBagsPage(this.page);
  }

  async clickOrdersAndReturnsLink() {
    await this.locators.getOrdersAndReturnsLink().click();

    return new OrdersAndReturnsPage(this.page);
  }

  async clickGearBags() {
    await this.locators.getGearBagsLink().click();

    return new GearBagsPage(this.page);
  }

  async clickFirstCardReviews() {
    await this.locators.getFirstCardReviews().click();

    return new RadiantTeePage(this.page)
  }

  async clickSecondCardName() {
    await this.locators.getSecondCardName().click();

    return new BreatheEasyTankPage(this.page)
  }

  async clickSecondCardImage() {
    await this.locators.getSecondCardImage().click();

    return new BreatheEasyTankPage(this.page)
  }

  async clickWomenTopsLink() {
    await this.locators.getWomenTopsLink().click();

    return new WomenTopsPage(this.page)
  }
  
  async clickSecondCardReviews() {
    await this.locators.getSecondCardReviews().click();

    return new BreatheEasyTankPage(this.page)
  }

  async clickThirdCardImage() {
    await this.locators.getThirdCardImage().click();
    
    return new ArgusAllWeatherTankPage(this.page)
  }

  async clickThirdCardName() {
    await this.locators.getThirdCardName().click();

    return new ArgusAllWeatherTankPage(this.page)
  }

  async clickFourthCardName() {
    await this.locators.getFourthCardName().click();

    return new HeroHoodiePage(this.page)
  }

  async clickFourthCardImage() {
    await this.locators.getFourthCardImage().click();

    return new HeroHoodiePage(this.page)
  }

  async clickTopsWomenLink() {
    await this.locators.getWomenTopsLink().click();

    return new TopsWomenPage(this.page)
  }

  async clickOnWomenTopsLink() {
    await this.locators.getWomenTopsLink().click();

    return new TopsWomenPage(this.page);
  }

  async hoverOverWomenMenuItem() {
    await this.locators.getWomenItemLink().hover();    

    return this;
  }

  async clickFifthCardImage() {
    await this.locators.getFifthCardImage().click();

    return new FusionBackpackPage(this.page)
  }
  
  async clickFifthCardName() {
    await this.locators.getFifthCardName().click();

    return new FusionBackpackPage(this.page)
  }

  async clickFifthCardReviews() {
    await this.locators.getFifthCardReviews().click();

    return new FusionBackpackPage(this.page)
  }
  
  async clickSixthCardImage() {
    await this.locators.getSixthCardImage().click();

    return new PushItMessengerBagPage(this.page)
  }

  async clickSixthCardName() {
    await this.locators.getSixthCardName().click();

    return new PushItMessengerBagPage(this.page)
  }

  async clickSixthCardReviews() {
    await this.locators.getSixthCardReviews().click();

    return new PushItMessengerBagPage(this.page)
  }

  async getGreetingText(name) {
    return await this.locators.getGreetingName(name).innerText();
  }

  async clickWelcomeDropdown() {
    await this.locators.getWelcomeDropdown().click();

    return this;
  }

  async clickMyAccountLink() {
    await this.locators.getMyAccountLink().click()

    return new MyAccountPage(this.page);
  }
  async clickHotSellersCardLink(ind) {
    await this.locators.getHotSellersCardLink().nth(ind).click();

    return new RadiantTeePage(this.page)
  }

  async clickGearFitnessEquipmentSubmenuItem() {
    await this.locators.getGearFitnessEquipmentSubmenuItem().click();

    return new GearFitnessPage(this.page);
  }
  
  async clickMainMenuLinks(i) {
    await this.locators.getMainMenuLinks().nth(i).click();    
  
  }

  async scrollToHotSellerSection() {
    await this.locators.getHotSellersSection().scrollIntoViewIfNeeded();
    
  }

  async clickRandomCard() {
    const hotCards = await this.page.locator('.product-item-info').all();
    await hotCards[getRandomNumber(hotCards.length)].click();

    return new ProductCardPage(this.page);
  }

  async clickWomenJacketsLink() {
    await this.locators.getWomenJacketslink().click();

    return new JacketsWomenPage(this.page);
  }

  async hoverWomenTopsLink() {
    await this.locators.getWomenTopsLink().hover();

    return this;
  }
}
  

export default HomePage;
