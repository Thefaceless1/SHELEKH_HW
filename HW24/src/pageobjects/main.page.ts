import {Page} from "./page.js";

export class MainPage extends Page {
    public menuOption(optionName : string) {
        return  browser.$(`//a[text()='${optionName}']`);
    }
}