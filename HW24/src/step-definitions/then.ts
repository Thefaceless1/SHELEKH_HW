import {Then} from "@wdio/cucumber-framework";
import {expect} from "expect-webdriverio"
import {DropdownPage} from "../pageobjects/dropdown.page.js";
import {KeypressPage} from "../pageobjects/keypress.page.js";
import {Element} from "../helpers/elements/element.js";
import {Page} from "../pageobjects/page.js";
import {LoginPage} from "../pageobjects/login.page.js";

const page = new Page()
const dropdownPage = new DropdownPage();
const keypressPage = new KeypressPage();
const loginPage = new LoginPage();
Then(/Page (.+) is opened/, async url => {
    expect(await page.currentUrl).toBe(url);
})
Then(/^Displayed dropdown value is (.*)$/, async (value : string) => {
    expect(await dropdownPage.dropdownOption(value)).toBeDisplayed();
});
Then(/^(.*) are displayed in the input$/,async (inputText : string) => {
    const keyInput = await keypressPage.keyInput;
    expect(await Element.valueAttribute(keyInput)).toBe(inputText);
});
Then(/^The name of the pressed (\w+) is displayed on the screen$/, async (keyName : string) => {
    expect(await keypressPage.pressedKey()).toBe(keyName);
});
Then(/^Message '(.*)' is displayed$/, async (message : string) => {
    expect(await loginPage.message).toBeDisplayed();
    expect(await loginPage.message.getText()).toContain(message);
});