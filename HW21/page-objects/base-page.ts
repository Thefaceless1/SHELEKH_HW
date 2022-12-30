import {By, WebDriver, WebElement} from "selenium-webdriver";
import {DriverManager} from "../framework/helpers/driver-manager";
import {BaseElements} from "../framework/elements/base-elements";

export class BasePage {
    public static formMeOnGithubUrl : string = "https://github.com/tourdedave/the-internet";
    protected static driver : WebDriver = DriverManager.startDriver;
    public static get getPageTitle () : WebElement {
        return BaseElements.getElement("xpath", "//h3");
    }
    public static get getForkMeOnGithub () : WebElement {
        return BaseElements.getElement("xpath", "//a[.//img[@alt='Fork me on GitHub']]");
    }
}
