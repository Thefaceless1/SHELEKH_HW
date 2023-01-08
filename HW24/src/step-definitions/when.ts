import {When} from "@wdio/cucumber-framework";
import {expect} from "expect-webdriverio"
import {MainPage} from "../pageobjects/main.page.js";
import {DropdownPage} from "../pageobjects/dropdown.page.js";
import {KeypressPage} from "../pageobjects/keypress.page.js";
import {Element} from "../helpers/elements/element.js";
import {Keyboard} from "../helpers/keyboard/keyboard.js";
import {LoginPage} from "../pageobjects/login.page.js";

const mainPage = new MainPage();
const dropdownPage = new DropdownPage();
const keypressPage = new KeypressPage();
const loginPage = new LoginPage();
When(/^I click on the (.+) menu option$/, async (button : string) => {
    await mainPage.menuOption(button).click();
});
When(/^I click on the dropdown and select (.*)$/, async (value : string) => {
    await dropdownPage.selectOption(value);
    expect(await dropdownPage.dropdownOption(value)).toBeDisplayed();
});
When(/^I type (.*) in the input$/, async (symbols : string) => {
    await Element.type(await keypressPage.keyInput,symbols);
});
When(/^I press (.*) in the input$/, async (key : string) => {
    await keypressPage.keyInput.click();
    await Keyboard.press(key);
});
When(/^I fill Username and Password fields with (.*)$/, async (data : string) => {
    await loginPage.fillInputs(data);
});
When(/^I click on the Login button$/, async () => {
    await loginPage.login.click();
});