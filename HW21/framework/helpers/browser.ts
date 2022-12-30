import {DriverManager} from "./driver-manager";
import {WebDriver} from "selenium-webdriver";

export class Browser  {
    private static driver : WebDriver =  DriverManager.startDriver;
    public static goToPage (page : string)  {
        return this.driver.get(page);
    }
    public static get closeBrowser () {
        return this.driver.close();
    }
    public static get getCurrentUrl () {
        return this.driver.getCurrentUrl();
    }
}