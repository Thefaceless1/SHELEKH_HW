import {BaseElement} from "./base-element.js";
import {Locator} from "@playwright/test";

export class Input extends BaseElement {
    public static async typeText (input : Locator, text : string) : Promise<void> {
        await input.click();
        await input.type(text);
    }
}