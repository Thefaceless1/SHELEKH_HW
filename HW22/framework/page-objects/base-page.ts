import {Browser, Page} from "@playwright/test";

export class BasePage {
    public static getPageTitle (page : Page) : Promise<string> {
        return page.title();
    }
    public static getCurrentUrl (page : Page) : string {
        return page.url();
    }
}