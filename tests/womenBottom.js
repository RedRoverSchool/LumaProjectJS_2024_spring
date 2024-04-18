test('verify navigation to watches page through gear section', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'Gear' }).hover();
    await page.getByText('Watches').click();
    await expect(page).toHaveURL('/gear/watches.html');
    await page.waitForSelector('h1:has-text("Watches")');
})