//URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const MEN_PAGE_END_POINT = '/men.html';
export const MEN_BOTTOMS_PAGE_END_POINT = 'https://magento.softwaretestingboard.com/men/bottoms-men.html';

//test data
export const MEN_PAGE_HEADER = "Men";
export const MEN_BOTTOMS_BREADCRUMBS_MENU_HOME_TEXT = ' Home ';
export const MEN_BOTTOMS_BREADCRUMBS_MENU_MEN_TEXT = 'Men';
export const MEN_BOTTOMS_BREADCRUMBS_MENU_BOTTOMS_TEXT = 'Bottoms';
export const COMPARE_PRODUCTS_TEXT = "Compare Products";
export const MY_WISH_LIST_TEXT = "My Wish List";
export const HOT_SELLERS_NAME = [
    "Argus All-Weather Tank",
    "Hero Hoodie",
    "Meteor Workout Short",
    "Geo Insulated Jogging Pant",
  ];
export const HOT_SELLERS_ENDPOINT_URL = [
    "argus-all-weather-tank.html",
    "hero-hoodie.html",
    "meteor-workout-short.html",
    "geo-insulated-jogging-pant.html",
  ];
export const MEN_TOPS_PRICE_LIST = [
  "$10.00 - $19.99",
  "$20.00 - $29.99",
  "$30.00 - $39.99",
  "$40.00 - $49.99",
  "$50.00 - $59.99",
  "$60.00 - $69.99",
  "$70.00 - $79.99",
  "$90.00 and above"
];
export const MEN_TOPS_PRICE_LIST_PRODUCT_COUNT = ["3", "17", "4", "6", "5", "9", "3", "1"];
export const MEN_TOPS_TOTAL_TOOLBAR_AMOUNT = 'Items 1-12 of 48';

//locators
export const MEN_TOPS_PRICE_LIST_LOCATORS = [
  '#narrow-by-list .item a[href$="price=10-20"]',
  '#narrow-by-list .item a[href$="price=20-30"]',
  '#narrow-by-list .item a[href$="price=30-40"]',
  '#narrow-by-list .item a[href$="price=40-50"]',
  '#narrow-by-list .item a[href$="price=50-60"]',
  '#narrow-by-list .item a[href$="price=60-70"]',
  '#narrow-by-list .item a[href$="price=70-80"]',
  '#narrow-by-list .item a[href$="price=90-"]'
]