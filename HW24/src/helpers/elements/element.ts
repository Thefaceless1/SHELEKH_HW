
export class Element {
    public static async type(element : WebdriverIO.Element,text : string) {
        await element.setValue(text);
    }
    public static valueAttribute(element : WebdriverIO.Element) {
        return element.getAttribute("value");
    }
}