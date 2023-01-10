import {ElementHandle, Locator} from "@playwright/test";

export class BaseElement {
    public static getElementTextContent (element: Locator) {
        return element.textContent();
    }
    public static getElementsTextContent (element: Locator) {
        return element.allTextContents();
    }
}