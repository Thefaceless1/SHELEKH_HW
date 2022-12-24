import {BaseElements} from "../framework/elements/base-elements";
import {WebDriver} from "selenium-webdriver";
import {DriverManager} from "../framework/helpers/driver-manager";
import {BasePage} from "./base-page";

export class Add_remove_elementsPage extends BasePage {
    public static url : string = "https://the-internet.herokuapp.com/add_remove_elements/";
    public static get getAddElemButton () {
        return BaseElements.getElement("xpath", "//button[contains(text(),'Add Element')]");
    }
    public static get getDeleteButtons () {
        return  BaseElements.getElements("xpath", "//button[contains(text(),'Delete')]");
    }

}