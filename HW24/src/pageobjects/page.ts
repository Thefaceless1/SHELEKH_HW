export class Page {
    public goto (url: string) {
        return browser.url(url);
    }
    public get currentUrl() {
        return browser.getUrl();
    }
}
