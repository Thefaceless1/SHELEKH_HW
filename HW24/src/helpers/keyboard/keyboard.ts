
export class Keyboard {
    public static async press(button : string) {
        await browser.action("key").down(button).up(button).perform();
    }
}