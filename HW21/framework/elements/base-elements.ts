import {By, WebDriver, WebElement} from "selenium-webdriver";
import {DriverManager} from "../helpers/driver-manager";
import {BasePage} from "../../page-objects/base-page";

export class BaseElements {
    protected static driver : WebDriver = DriverManager.startDriver;
    public static getElement (searchType : searchType, selector : string) : WebElement {
        switch (searchType) {
            case "xpath" : return this.driver.findElement(By.xpath(selector));
            case "css" : return this.driver.findElement(By.css(selector));
        }
    }
    public static getElements (searchType : searchType, selector : string) : Promise<WebElement[]> {
        switch (searchType) {
            case "xpath" : return this.driver.findElements(By.xpath(selector));
            case "css" : return this.driver.findElements(By.css(selector));
        }
    }
    public static getElementText (element : WebElement) : Promise<string>  {
        return element.getText();
    }
    public static clickElement(element: WebElement) : Promise<void> {
        return element.click();
    }
    public static checkElementDisplay (element : WebElement) : Promise<boolean> {
        return element.isDisplayed();
    }
}
type searchType = "xpath" | "css";