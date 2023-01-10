import {BasePage} from "./base-page.js";
import {Locator, Page} from "@playwright/test";
import {Input} from "../elements/input.js";
import {UserdataReader} from "../helpers/userdata-reader.js";

export class LoginPage extends BasePage {
    public static readonly url : string = "https://the-internet.herokuapp.com/login";
    public static readonly successUrl : string = "https://the-internet.herokuapp.com/secure";
    public static getLoginButton (page : Page) : Locator {
        return page.locator("//button[@type='submit']");
    }
    public static getLoginInput (page : Page) : Locator {
        return page.locator("//input[@id='username']");
    }
    public static getPasswordInput (page : Page) : Locator {
        return page.locator("//input[@id='password']");
    }
    public static async login (page : Page) : Promise<void> {
        await this.getLoginInput(page).click();
        await Input.typeText(this.getLoginInput(page),UserdataReader.getUserLogin);
        await this.getPasswordInput(page).click();
        await Input.typeText(this.getPasswordInput(page),UserdataReader.getUserPassword);
        await this.getLoginButton(page).click();
    }
    public static getLogoutButton (page : Page) : Locator {
        return page.locator("//a[.//i[contains(@class,'icon-signout')]]");
    }
}