import {Page} from "./page.js";
import {Element} from "../helpers/elements/element.js";

export class LoginPage extends Page {
    public get login() {
        return browser.$("//i[text()=' Login']");
    }
    public get username() {
        return browser.$("//input[@id='username']");
    }
    public get password() {
        return browser.$("//input[@id='password']");
    }
    public get message() {
        return browser.$("//*[@id='flash']");
    }
    public async fillInputs(data : string) {
        const userValue = data.split(" ")[0];
        const passwordValue = data.split(" ")[1];
        await this.username.click()
        await Element.type(await this.username,userValue);
        await this.password.click()
        await Element.type(await this.password,passwordValue);
    }
}