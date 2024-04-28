//URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const WHATS_NEW_PAGE_END_POINT = '/what-is-new.html';
export const TEES_WOMEN_PAGE_END_POINT = '/women/tops-women/tees-women.html';
export const TOPS_WOMEN_PAGE_END_POINT = '/women/tops-women.html';
export const BOTTOMS_WOMEN_PAGE_END_POINT = '/women/bottoms-women.html';
export const MEN_BOTTOMS_PAGE_END_POINT = '/men/bottoms-men.html'
export const TRAINING_URL = "https://magento.softwaretestingboard.com/training.html";
export const SEARCH_RESULTS_JACKET_PAGE_END_POINT = '/catalogsearch/result/?q=jacket';
export const MEN_TOPS_PAGE_END_POINT = '/men/tops-men.html'
export const SHIPPING_PAGE_END_POINT = '/checkout/#shipping';

//test data
export const WHATS_NEW_PAGE_HEADER = "What's New";
export const SEARCH_QUERY = "short";
export const SEARCH_QUERY_UPPERCASE = SEARCH_QUERY.toLocaleUpperCase();
export const TRAINING_PAGE_HEADER = 'Training';
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
export const EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS = ['Base Layer', 'Basic', 'Capri', 'Compression', 'Leggings', 'Parachute', 'Snug', 'Sweatpants', 'Track Pants'];

export const SEARCH_VALID_VALUE = 'jacket';
export const SEARCH_RESULTS_JACKET_HEADER = `Search results for: '${SEARCH_VALID_VALUE}'`;

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
    'Tee']

export const EXPECTED_ITEM_STYLE_WOMEN_BOTTOMS = ['Base Layer', 'Basic', 'Capri', 'Compression', 'Leggings', 'Parachute', 'Snug', 'Sweatpants', 'Track Pants'];
export const SHIPPING_PROGRESS_BAR_TEXT = 'Shipping';
export const SEARCH_TERMS_POPULAR_PAGE_END_POINT = '/search/term/popular/';
export const SEARCH_TERMS_POPULAR_PAGE_HEADER = 'Popular Search Terms'

//login  credential


