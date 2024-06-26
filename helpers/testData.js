import { expect } from "@playwright/test";

//URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const WHATS_NEW_PAGE_END_POINT = '/what-is-new.html';
export const TEES_WOMEN_PAGE_END_POINT = '/women/tops-women/tees-women.html';
export const TOPS_WOMEN_PAGE_END_POINT = '/women/tops-women.html';
export const BOTTOMS_WOMEN_PAGE_END_POINT = '/women/bottoms-women.html';
export const MEN_BOTTOMS_PAGE_END_POINT = '/men/bottoms-men.html';
export const TRAINING_URL = "https://magento.softwaretestingboard.com/training.html";
export const TRAINING_PAGE_VIDEODOWNLOAD_URL = "https://magento.softwaretestingboard.com/training/training-video.html";
export const COMPARE_URL_REGEX = new RegExp("https://magento.softwaretestingboard.com/catalog/product_compare/index/uenc/.+");
export const MY_WISHLIST_PAGE_URL = "https://magento.softwaretestingboard.com/wishlist/";
export const SEARCH_RESULTS_JACKET_PAGE_END_POINT = '/catalogsearch/result/?q=jacket';
export const MEN_TOPS_PAGE_END_POINT = '/men/tops-men.html';
export const SHIPPING_PAGE_END_POINT = '/checkout/#shipping';
export const RADIANT_TEE_PAGE_END_POINT = '/radiant-tee.html';
export const RADIANT_TEE_PAGE_REVIEWS_TAB_END_POINT = '/radiant-tee.html#reviews';
export const BREATHE_EASY_TANK_PAGE_END_POINT = '/breathe-easy-tank.html';
export const BREATHE_EASY_TANK_PAGE_REVIEWS_TAB_END_POINT = '/breathe-easy-tank.html#reviews';
export const SALE_PAGE_END_POINT = '/sale.html';
export const CUSTOMER_LOGIN_PAGE_END_POINT = '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/';
export const ARGUS_ALL_WEATHER_TANK_PAGE_END_POINT = '/argus-all-weather-tank.html';
export const HERO_HOODIE_PAGE_END_POINT = '/hero-hoodie.html';
export const SIGN_IN_PAGE_END_POINT = "/customer/account/login/referer/*";
export const FUSION_BACKPACK_END_POINT = '/fusion-backpack.html';
export const PIERCE_GYM_SHORT = "https://magento.softwaretestingboard.com/wishlist/index/configure/id/169/product_id/1028/";
export const SEARCH_ADVANCED_PAGE_END_POINT = '/catalogsearch/advanced/';
export const PUSH_IT_MESSENGER_BAG_PAGE_END_POINT = '/push-it-messenger-bag.html'
export const WOMEN_SHORTS_PAGE_END_POINT = '/women/bottoms-women/shorts-women.html'
export const FOOTER_ORDERS_AND_RETURNS_PAGE_END_POINT = '/sales/guest/form/';
export const CUSTOMER_LOGIN_PAGE_END_POINT_SHORT = '/customer/account/login/';
export const CUSTOMER_WISH_LIST_END_POINT = `/wishlist/index/index/wishlist_id/*`;

export const LIST_OF_URLS_MENS_DEALS_END_POINT = [
  '/men/tops-men/hoodies-and-sweatshirts-men.html',
  '/men/tops-men/jackets-men.html',
  '/men/tops-men/tees-men.html',
  '/men/bottoms-men/pants-men.html',
  '/men/bottoms-men/shorts-men.html'
];

export const CUSTOMER_ACCOUNT_CREATE_END_POINT = '/customer/account/create/';
export const MY_ACCOUNT_PAGE_END_POINT = '/customer/account/';
export const NAVBAR_URLs_END_POINTS = [
  '/what-is-new.html',
  '/women.html',
  '/men.html',
  '/gear.html',
  '/training.html',
  '/sale.html'
];
export const GEAR_BAGS_PAGE_END_POINT = '/gear/bags.html';

export const FOOTER_LINKs_URLs_END_POINTS = [
  '/search/term/popular/',
  '/privacy-policy-cookie-restriction-mode',
  '/catalogsearch/advanced/'
];

export const MEN_TOPS_CATEGORY_PAGES_END_POINT = [
  '/men/tops-men.html?cat=14',
  '/men/tops-men.html?cat=15',
  '/men/tops-men.html?cat=16',
  '/men/tops-men.html?cat=17'
];
export const SIGN_IN_END_POINT = '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/';

export const NOTES_PAGE_URL = 'https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion';

export const GEAR_FITNESS_PAGE_END_POINT = '/gear/fitness-equipment.html';
export const SORTED_LIST_FITNESS_PAGE_ENDPOINT = '/gear/fitness-equipment.html?product_list_mode=list';
export const GEAR_PAGE_END_POINT = '/gear.html';

export const WOMEN_BOTTOMS_CATEGORIES_STYLEs_END_POINT = [
  '/women/bottoms-women.html?style_bottom=104',
  '/women/bottoms-women.html?style_bottom=105',
  '/women/bottoms-women.html?style_bottom=106',
  '/women/bottoms-women.html?style_bottom=107',
  '/women/bottoms-women.html?style_bottom=108',
  '/women/bottoms-women.html?style_bottom=109',
  '/women/bottoms-women.html?style_bottom=111',
  '/women/bottoms-women.html?style_bottom=112',
  '/women/bottoms-women.html?style_bottom=114'];

//test data
export const WHATS_NEW_PAGE_HEADER = "What's New";
export const WOMEN_PAGE_HEADER = 'Women';
export const GEAR_PAGE_HEADER = 'Gear'
export const SALE_PAGE_HEADER = 'Sale'
export const SEARCH_QUERY = "short";
export const SEARCH_QUERY_UPPERCASE = SEARCH_QUERY.toLocaleUpperCase();
export const TRAINING_PAGE_HEADER = 'Training';
export const TRAINING_PAGE_BREADCRUMBS_MENU_TRAINING_TEXT = 'Training';
export const TRAINING_PAGE_BREADCRUMBS_MENU_HOME_TEXT = 'Home';
export const VIDEODOWNLOAD_PAGE_HEADER = 'Video Download';
export const COMPARE_PRODUCT_PAGE_HEADER = 'Compare Products';
export const COMPARE_PRODUCT_PAGE_ITEM_TEXT = 'Push It Messenger Bag';
export const MY_WISHLIST_PAGE_ITEM_TEXT = 'Push It Messenger Bag';
export const MY_WISHLIST_PAGE_HEADER = 'My Wish List';
export const WOMEN_TOPS_HEADER = 'Tops';
export const WOMEN_BOTTOMS_HEADER = 'Bottoms';
export const GEAR_BAGS_HEADER = 'Bags';
export const SIGN_IN_HEADER = 'Customer Login';
export const BUTTON_REGISTRATION_TITLE = 'Create an Account';
export const CREATE_ACCOUNT_PAGE_HEADER = /Create New Customer Account/;
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
export const NAVBAR_MENU = ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale']

function generateRandomEmail() {
  const mailbox = Math.random().toString(36).substring(2, 10);
  const domain = "gmail.com";
  return `${mailbox}@${domain}`;
};

function generateRandomNumber() {
  return Math.random().toString(36).substring(2, 10)
}

export const GEN_RANDOM_NUMBER = generateRandomNumber()
export const EMAIL = generateRandomEmail();
export const MY_ACCOUNT_HEADER = 'My Account';
export const THANKS_MESSAGE = 'Thank you for registering with Main Website Store.';
export const EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS = ['Base Layer', 'Basic', 'Capri', 'Compression', 'Leggings', 'Parachute', 'Snug', 'Sweatpants', 'Track Pants'];
export const EXPECTED_NUMBER_PRODUCTS_STYLEs_BOTTOMS_WOMEN = [4, 10, 8, 3, 4, 2, 5, 3, 3];

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
export const SEARCH_TERMS_POPULAR_PAGE_HEADER = 'Popular Search Terms';
export const MY_ORDERS_PAGE_END_POINT = '/sales/order/history/';
export const MY_ACCOUNT_END_POINT = '/customer/account/';
export const MY_ACCOUNT_CREATE_END_POINT = '/customer/account/create/';
export const MY_ORDERS_HEADER = 'My Orders';
export const WOMEN_JACKETS_NAME = 'Inez Full Zip Jacket';
export const INEZ_FULL_ZIP_JACKET1_END_POINT = '/inez-full-zip-jacket.html';
export const SHOPPING_CART_END_POINT = '/checkout/cart/';
export const EMPTY_CARD_MESSAGE = 'You have no items in your shopping cart.';
export const MY_WISH_LIST_EMPTY_MESSAGE = 'You have no items in your wish list.'
export const MEN_PAGE_TOPS_SUB_CATEGORY_LINK_COLOR = 'rgb(0, 107, 180)';
export const MEN_PAGE_BOTTOMS_SUB_CATEGORY_LINK_COLOR = 'rgb(0, 107, 180)';
export const MEN_PAGE_SHOP_BY_CATEGORY_BLOCK_ALIGNMENT = 'left';
export const MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_AMOUNT = 2;
export const MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_VALUES_REGEX = /Tops|Bottoms/;
export const MEN_PAGE_SHOP_BY_CATEGORY_SUB_CATEGORIES_COUNTER_DATATYPE = 'number';
export const MEN_PAGE_SUB_CATEGORY_ENDPOINT_URL = {
  Tops: '/men/tops-men.html',
  Bottoms: '/men/bottoms-men.html',
};
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
export const LIST_OF_SUBMENU_ITEMS_EXPECTED = [
  ["Electronic", "Exercise", "Fashion", "Timepiece"],
  ["$40.00 - $49.99", "$50.00 - $59.99", "$90.00 and above"],
  ["Outdoor", "Recreation", "Gym", "Athletic", "Sports"],
  ["Leather", "Metal", "Plastic", "Rubber", "Stainless Steel", "Silicone"],
  ["Men", "Women", "Unisex"],
  ["Yes"],
  ["Yes"]
];
export const LIST_OF_MATERIALS_SUBITEMS_EXPECTED = [
  "Leather",
  "Metal",
  "Plastic",
  "Rubber",
  "Stainless Steel",
  "Silicone",
];

export const JACKET_ITEMS = ["Jacket", "Shell"];
export const LIST_OF_ITEMS_IN_MENS_DEALS_ON_SALE_PAGE = ["Hoodies and Sweatshirts", "Jackets", "Tees", "Pants", "Shorts"];
export const LIST_OF_TITLES_FOR_PAGES_FROM_MENS_DEALS = ['Hoodies & Sweatshirts', 'Jackets', 'Tees', 'Pants', 'Shorts'];
export const ORDERS_AND_RETURNS_HEADER = 'Orders and Returns';
export const CUSTOMER_LOGIN_PAGE_HEADER = "Customer Login";

export const LIST_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE_LOCATORS = [
  '.filter-options-item.allow.active > div > ol > li:nth-child(1) a',
  '.filter-options-item.allow.active > div > ol > li:nth-child(2) a'
];

export const LIST_OF_SUB_CATEGORY_ON_MEN_TOPS_PAGE_LOCATORS = [
  '.filter-options-item.allow.active > div > ol > li:nth-child(1) a',
  '.filter-options-item.allow.active > div > ol > li:nth-child(2) a',
  '.filter-options-item.allow.active > div > ol > li:nth-child(3) a',
  '.filter-options-item.allow.active > div > ol > li:nth-child(4) a'];

export const LIST_LABELS_SUB_CATEGORY = [
  'Jackets',
  'Hoodies & Sweatshirts',
  'Tees',
  'Tanks'];

export const LIST_CATEGORY_MEN_BOTTOMS = ['Pants', 'Shorts'];
export const ID_PARAMETERS_OF_SUB_CATEGORY_ON_MEN_BOTTOMS_PAGE = ['?cat=18', '?cat=19'];
export const FOOTER_LINK_NAME = ['Search Terms', 'Privacy and Cookie Policy', 'Advanced Search']
export const LOGO_ALIGNMENT = 'left';

export const LIST_OF_COUNT_SUB_CATEGORY_ON_MEN_TOPS_PAGE = [
  '.filter-options-item.allow.active > div > ol > li:nth-child(1) > a > span',
  '.filter-options-item.allow.active > div > ol > li:nth-child(2) > a > span',
  '.filter-options-item.allow.active > div > ol > li:nth-child(3) > a > span',
  '.filter-options-item.allow.active > div > ol > li:nth-child(4) > a > span'];

export const SEARCH_ADVANCED_PAGE_HEADER = 'Advanced Search';
export const LIST_CATEGORY_MEN_BOTTOMS_WITH_QUANTITY = ['Pants 12 item', 'Shorts 12 item'];
export const PRODUCT_LIST = 'products-list';

export const LIST_OF_CATEGORY_WATCHES = ['Electronic', 'Exercise', 'Fashion', 'Timepiece'];

export const GEAR_FITNESS_NUMBER_ITEMS_IN_GRID_MODE = '11 Items';
export const GEAR_FITNESS_NUMBER_ITEMS_IN_LIST_MODE = 'Items 1-10 of 11';

export const SHOPPING_OPTIONS_FILTER_VALUE = '.filter-value';

//login  credential

export const email = 'kati24@gmail.com';
export const password = 'Password!';

export const EMAIL_WISHLIST = 'johnLennon@gmail.com';
export const PASSWORD_WISHLIST = 'Jonny1940!';

export const USER_DATA = {
  firstName: "Angelina-Maria",
  lastName: "O'Neel",
  email: generateRandomEmail(),
  password: "RT45bb%%mm"
}

export const NEW_USER_DATA = {
  firstName: "Bob",
  lastName: "Tester",
  newEmail: generateRandomEmail(),
  oldPassword: "RT45bb%%mm",
  newPassword: "Bob_Tester",
  shortPassword: "asQW34@",
  passwordWithSpaces: {
    spacesLocation: ["starts", "ends", "starts and ends"],
    password: [" asdQWE123", "asdQWE123 ", "  asdQWE123  "],
  },
}
export const ORDERS_AND_RETURNS_PAGE_FIELDS = ['Order ID', 'Billing Last Name', 'Find Order By', 'Email'];
export const MENU_GEAR_EXPECTED_ITEMS = ['Bags', 'Fitness Equipment', 'Watches'];

export const ADRESS_DATA = {
  street: "Street",
  city: "City",
  postal_code: "35023",
  phone_number: "+975543621798"
}
export const PAYMENT_METHOD_PAGE_END_POINT = '/checkout/#payment';
export const CHECKOUT_ONEPAGE_SUCCESS_PAGE_END_POINT = '/checkout/onepage/success/'

export const CUSTOMER_USER_DATA = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@gmail.com",
  password: "Tester#123"
}

export const MessageComparisonList = "comparison list";
export const CREATE_ACCOUNT_FORM_LABELS = ["First Name", "Last Name", "Email", "Password", "Confirm Password"];
export const ACCOUNT_FORM_EMPTY_INPUTS = ["", "", "", "", ""];
export const CREATE_ACCOUNT_PAGE_PASSWORD_ERROR_MESSAGE = "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.";
export const CREATE_ACCOUNT_PAGE_PASSWORD_WITH_SPACES_MESSAGE = "The password can't begin or end with a space. Verify the password and try again.";


export const PRODUCT_IS_IN_STOCK_TEXT_STATUS = 'In stock'