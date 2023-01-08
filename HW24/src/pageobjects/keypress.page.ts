import {Page} from "./page.js";

export class KeypressPage extends Page {
    public get keyInput() {
        return browser.$("//input");
    }
    public async pressedKey() {
        const resultText = await browser.$("//*[@id='result']").getText();
        const regExp = /\w+$/g;
        return resultText.match(regExp)[0].toLowerCase();
    }
}