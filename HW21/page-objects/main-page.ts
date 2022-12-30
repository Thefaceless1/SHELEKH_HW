import {BasePage} from "./base-page";
import {WebElement} from "selenium-webdriver";
import {BaseElements} from "../framework/elements/base-elements";
import {ExampleMenu} from "../framework/enums/example-menu";

export class MainPage extends BasePage {
    public static url : string = "https://the-internet.herokuapp.com/";
    public static titleText : string = "Welcome to the-internet";
    public static get getMainPageTitle () : WebElement {
        return BaseElements.getElement("xpath", "//h1[@class ='heading']");
    }
    public static get getExampleMenu () : Promise<WebElement[]> {
        return BaseElements.getElements("xpath", "//ul//li");
    }
    public static  getExampleMenuElement (name : ExampleMenu) {
        return BaseElements.getElement("xpath", `//a[contains(text(),'${name}')]`);
    }
}
