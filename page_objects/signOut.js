import SignInPage from './signInPage'

class HomePage {
   constructor(page) {
    this.page = page
   }
   locators = {

    getWhatsNewLink: () => this.page.getByRole('link', { name: 'Sign In' }),

   }

   async open() {
    await this.page.goto('/')
   }

   async clickWhatsNewLink() {
    await this.locators.getWhatsNewLink().click();
    return new SignInPage(this.page);
   }
}
export default HomePage;