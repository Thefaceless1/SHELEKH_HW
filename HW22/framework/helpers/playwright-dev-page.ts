import {Page} from "@playwright/test";

export class PlaywrightDevPage {
    private readonly page : Page;
    constructor(page : Page) {
        this.page = page
    }
    public goTo (url : string) {
        return this.page.goto(url);
    }
}