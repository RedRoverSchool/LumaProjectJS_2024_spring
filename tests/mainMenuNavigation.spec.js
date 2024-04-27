import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { beforeEach } from "node:test";

test.describe('mainMenuNavigation.spec', () => {
  const homePage = new HomePage(page);
  beforeEach('Open main page', async () => {
    await homePage.open();
    })
  test("verify 6 menu options on the main page have particular text and clickable", async ({ page }) => {


  })
})