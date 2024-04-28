class MenTopsPage{
   constructor(page){
    this.page = page;
   }
   locators = {
    getMenTopsStyle: () => this.page.getByRole("tab",{name:"Style"}),
    getMenTopsListStyle: () => this.page.locator('a[href*= "men/tops-men.html?style_general"]'),
    getMenTopsCategory: () => this.page.getByRole('tab', { name: 'Category' }),
    getMenTopsListCategory: () => this.page.locator('#narrow-by-list').getByRole('tabpanel'),
   }
   async clickMenTopsStyle(){
    await this.locators.getMenTopsStyle().click()

    return this
   }
   async clickMenTopsCategory(){
      await this.locators.getMenTopsCategory().click();
      return this.page;
   }
}
export default MenTopsPage