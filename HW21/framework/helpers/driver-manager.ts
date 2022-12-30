import {Browser, Builder, WebDriver} from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import {path} from "chromedriver";

export class DriverManager {
    private static driverInstance : WebDriver;
    public static get startDriver () : WebDriver {
        if (this.driverInstance) return this.driverInstance;
        else {
            const service = new chrome.ServiceBuilder(path);
            this.driverInstance =  new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
            this.driverInstance.manage().window().maximize();
            return this.driverInstance
        }
    }
    public static quitDriver () {
        return this.driverInstance.quit();
    }
}