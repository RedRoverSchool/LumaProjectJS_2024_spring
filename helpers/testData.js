//URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const WHATS_NEW_PAGE_END_POINT = '/what-is-new.html';
export const TEES_WOMEN_PAGE_END_POINT = '/women/tops-women/tees-women.html';
export const MEN_PAGE_END_POINT = '/men.html';
export const TOPS_WOMEN_PAGE_END_POINT = '/women/tops-women.html';
export const BOTTOMS_WOMEN_PAGE_END_POINT = '/women/bottoms-women.html';

//test data
export const WHATS_NEW_PAGE_HEADER = "What's New";
export const MEN_PAGE_HEADER = "Men";
export const COMPARE_PRODUCTS_TEXT = "Compare Products";
export const MY_WISH_LIST_TEXT = "My Wish List";
export const SEARCH_QUERY = "short";
export const SEARCH_QUERY_UPPERCASE = SEARCH_QUERY.toLocaleUpperCase();
export const WOMEN_TOPS_HEADER = 'Tops'
export const WOMEN_BOTTOMS_HEADER = 'Bottoms'
export const shoppingItem1 = {
    name: "Radiant Tee",
    price: 22.00,
    size: "S",
    color: "Blue",
    quantity: 1
};
export const shoppingItem2 = {
    name: "Radiant Tee",
    price: 22.00,
    size: "M",
    color: "Blue",
    quantity: 1
};
export const FIRST_NAME = 'Svetlana';
export const LAST_NAME = 'Kudryvzeva';
export const PASSWORD = '12345Sveta!';
export const PASSWORD_CONFIRM = '12345Sveta!';

function generateRandomEmail() {
    const mailbox = Math.random().toString(36).substring(2, 10);
    const domain = "gmail.com";
    return `${mailbox}@${domain}`;
  }

export const EMAIL = generateRandomEmail(); 
export const MY_ACCOUNT_HEADER = 'My Account';
export const THANKS_MESSAGE = 'Thank you for registering with Main Website Store.';

//login  credential