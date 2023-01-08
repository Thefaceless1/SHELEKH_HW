import {Given, BeforeStep} from "@wdio/cucumber-framework";
import {MainPage} from "../pageobjects/main.page.js";

const mainPage = new MainPage();
BeforeStep(async () => {
    await browser.setWindowSize(1920,1080)
})
Given(/^I'm on the (.+) page$/, async (url : string) => {
    await mainPage.goto(url);
})