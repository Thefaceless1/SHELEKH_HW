import {Page} from "./page.js";

export class DropdownPage extends Page {
    public dropdownOption (option : string) {
        return browser.$(`//option[text()='${option}']`);
    }
    public get dropdown () {
        return browser.$("//select[@id='dropdown']");
    }
    public async selectOption (option: string) {
        await this.dropdown.click();
        await this.dropdownOption(option).click();
    }
}