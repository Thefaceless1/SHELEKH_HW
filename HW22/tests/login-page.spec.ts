import { test, expect,type Page} from '@playwright/test';
import {PlaywrightDevPage} from "../framework/helpers/playwright-dev-page.js";
import {LoginPage} from "../framework/page-objects/login-page.js";
import {BasePage} from "../framework/page-objects/base-page.js";

test.describe("Login page" ,() => {
    test.beforeEach(async ({page}) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.goTo(LoginPage.url);
    })
    test("Login button is located and available", async ({page}) => {
        expect(await LoginPage.getLoginButton(page).isVisible()).toBeTruthy();
        expect(await LoginPage.getLoginButton(page).isEnabled()).toBeTruthy();
    })
    test("Login input is located and available",async ({page}) => {
        expect(await LoginPage.getLoginInput(page).isVisible()).toBeTruthy();
        expect(await LoginPage.getLoginInput(page).isEnabled()).toBeTruthy();
    })
    test("Password input is located and available",async ({page}) => {
        expect(await LoginPage.getPasswordInput(page).isVisible()).toBeTruthy();
        expect(await LoginPage.getPasswordInput(page).isEnabled()).toBeTruthy();
    })
    test("Login is the system", async ({page}) => {
        await LoginPage.login(page);
        expect(BasePage.getCurrentUrl(page)).toBe(LoginPage.successUrl);
    })
    test("Logout button is located and available",async ({page}) => {
        await LoginPage.login(page);
        expect(await LoginPage.getLogoutButton(page).isVisible()).toBeTruthy();
        expect(await LoginPage.getLogoutButton(page).isEnabled()).toBeTruthy();
    })
})