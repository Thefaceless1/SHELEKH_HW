import {BaseElements} from "./base-elements";
import {WebElement} from "selenium-webdriver";

export class Links extends BaseElements {
    public static getHrefValue (element: WebElement) :  Promise<string> {
        return element.getAttribute("href");
    }
}