import { test, expect } from "@playwright/test";

test.describe('Privacy Policy Page', () => {
    const navMenuItemNames = [
        "Luma Security",
        "Luma Privacy Policy",
        "The Information We Collect",
        "How We Use The Information We Collect",
        "Security",
        "Others With Whom We Share Your Information.",
        "Your Choices Regarding Use Of The Information We Collect",
        "Your California Privacy Rights",
        "Cookies, Web Beacons, and How We Use Them",
        "List of cookies we collect",
        "Online Account Registration",
        "Emails",
        "Acceptance",
        "Questions for Luma?"
    ]
    
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        const privacyAndCookiePolicyLink = page.getByRole('link', { name: 'Privacy and Cookie Policy' });
        await privacyAndCookiePolicyLink.click();
    })

    test('TC 02.2.2_01 | Verify the navigation menu has 14 items, and they have correct names', async ({ page }) => {
        const navMenuItemList = page.locator('#privacy-policy-nav-content').getByRole('listitem');
        
        await expect(navMenuItemList).toHaveCount(navMenuItemNames.length);
        await expect(navMenuItemList).toHaveText(navMenuItemNames);
    })
    
    navMenuItemNames.forEach((item, idx) => {
        test(`TC 02.2.2_03 | Verify ${item} header on the right side of the page matches navigation menu item`, async ({ page }) => {
            const contentHeader = page.getByRole('heading', {name: item, exact: true})

            await expect(contentHeader).toHaveText(navMenuItemNames[idx])
        })
    })

})