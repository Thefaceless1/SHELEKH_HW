import {BaseElements} from "./base-elements";
import {WebDriver, WebElement} from "selenium-webdriver";

export class Button extends BaseElements {
    public static checkEnabledStatus (button : WebElement) {
        return button.isEnabled()
    }
}