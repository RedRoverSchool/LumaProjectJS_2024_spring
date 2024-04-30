//URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const WHATS_NEW_PAGE_END_POINT = '/what-is-new.html';
export const TEES_WOMEN_PAGE_END_POINT = '/women/tops-women/tees-women.html';
export const TOPS_WOMEN_PAGE_END_POINT = '/women/tops-women.html';
export const BOTTOMS_WOMEN_PAGE_END_POINT = '/women/bottoms-women.html';
export const MEN_BOTTOMS_PAGE_END_POINT = '/men/bottoms-men.html';
export const TRAINING_URL = "https://magento.softwaretestingboard.com/training.html";
export const SEARCH_RESULTS_JACKET_PAGE_END_POINT = '/catalogsearch/result/?q=jacket';
export const MEN_TOPS_PAGE_END_POINT = '/men/tops-men.html';
export const SHIPPING_PAGE_END_POINT = '/checkout/#shipping';
export const RADIANT_TEE_PAGE_END_POINT = '/radiant-tee.html';

//test data
export const WHATS_NEW_PAGE_HEADER = "What's New";
export const SEARCH_QUERY = "short";
export const SEARCH_QUERY_UPPERCASE = SEARCH_QUERY.toLocaleUpperCase();
export const TRAINING_PAGE_HEADER = 'Training';
export const TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT  = 'Training';
export const TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT  = 'Home';
export const WOMEN_TOPS_HEADER = 'Tops'
export const WOMEN_BOTTOMS_HEADER = 'Bottoms';
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
  };

export const EMAIL = generateRandomEmail();
export const MY_ACCOUNT_HEADER = 'My Account';
export const THANKS_MESSAGE = 'Thank you for registering with Main Website Store.';
export const EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS = ['Base Layer', 'Basic', 'Capri', 'Compression', 'Leggings', 'Parachute', 'Snug', 'Sweatpants', 'Track Pants'];

export const SEARCH_VALID_VALUE = 'jacket';
export const SEARCH_INVALID_VALUE = `${SEARCH_VALID_VALUE}test`;
export const SEARCH_RESULTS_JACKET_HEADER = `Search results for: '${SEARCH_VALID_VALUE}'`;
export const WARNING_MESSAGE_NO_RESULTS = ' Your search returned no results. ';
export const ITEMS = ' Items ';

export const LIST_STYLE_MEN_TOPS = [
    'Insulated',
    'Jacket',
    'Lightweight',
    'Hooded',
    'Heavy Duty',
    'Rain Coat',
    'Hard Shell',
    'Soft Shell',
    'Windbreaker',
    '¼ zip',
    'Full Zip',
    'Reversible',
    'Tank',
    'Tee'];
export const SALE_SIDE_MENU_SECTIONS = ["WOMEN'S DEALS", "MENS'S DEALS", "GEAR DEALS"];

export const LIST_CATEGORY_MEN_TOPS = [
    'Jackets 11 item',
    'Hoodies & Sweatshirts 13 item',
    'Tees 12 item',
    'Tanks 12 item'];


export const SHIPPING_PROGRESS_BAR_TEXT = 'Shipping';
export const SEARCH_TERMS_POPULAR_PAGE_END_POINT = '/search/term/popular/';
export const SEARCH_TERMS_POPULAR_PAGE_HEADER = 'Popular Search Terms' ;
export const MY_ORDERS_PAGE_END_POINT = '/sales/order/history/';
export const MY_ACCOUNT_END_POINT = '/customer/account/';
export const MY_ORDERS_HEADER = 'My Orders';
export const WOMEN_JACKETS_NAME = 'Inez Full Zip Jacket';
export const INEZ_FULL_ZIP_JACKET1_END_POINT = '/inez-full-zip-jacket.html';
export const SHOPPING_CART_END_POINT = '/checkout/cart/';
export const EMPTY_CARD_MESSAGE = 'You have no items in your shopping cart.';
export const MY_WISH_LIST_EMPTY_MESSAGE ='You have no items in your wish list.'
export const MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR = 'rgb(0, 107, 180)';
export const MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR = 'rgb(0, 107, 180)';
export const SHOPING_CART_COUNTER_NUMBER = '1';
export const WOMEN_CATEGORIES = ["Tops", "Bottoms"];
export const LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE = [
  "CATEGORY",
  "PRICE",
  "ACTIVITY",
  "MATERIAL",
  "GENDER",
  "NEW",
  "SALE",
];
export const LIST_OF_SHOPPING_OPTIONS_ON_WATCHES_PAGE_LOCATORS = [
  "div.filter-options>div:nth-child(1) ol li a",
  "div.filter-options>div:nth-child(2) ol li a",
  "div.filter-options>div:nth-child(3) ol li a",
  "div.filter-options>div:nth-child(4) ol li a",
  "div.filter-options>div:nth-child(5) ol li a",
  "div.filter-options>div:nth-child(6) ol li a",
  "div.filter-options>div:nth-child(7) ol li a",
];


//login  credential

export const email = 'kat123@gmail.com';
export const password = 'Password!';

