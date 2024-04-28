class MenTopsPage{
   constructor(page){
    this.page = page;
   }
   locators = {
    getMenTopsStyle: () => this.page.getByRole("tab",{name:"Style"}),
    getMenTopsListStyle: () => this.page.locator('a[href*= "men/tops-men.html?style_general"]')
   }
   async clickMenTopsStyle(){
    await this.locators.getMenTopsStyle().click()

    return this
   }

}
export default MenTopsPage