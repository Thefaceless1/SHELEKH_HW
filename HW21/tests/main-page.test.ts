import {describe} from "@jest/globals";
import {DriverManager} from "../framework/helpers/driver-manager";
import {Browser} from "../framework/helpers/browser";
import {MainPage} from "../page-objects/main-page";
import {BaseElements} from "../framework/elements/base-elements";
import {ExampleMenu} from "../framework/enums/example-menu";
import {Links} from "../framework/elements/links";
import {Add_remove_elementsPage} from "../page-objects/add_remove_elements-page";
import {BasePage} from "../page-objects/base-page";


describe("Main page",() => {
    beforeEach(async () => {
        await DriverManager.startDriver;
        await Browser.goToPage(MainPage.url);
    })
    afterAll(async () => {
        await DriverManager.quitDriver();
    })
    test("Main page title text", async () => {
        const titleText = await BaseElements.getElementText(MainPage.getMainPageTitle);
        expect(titleText).toBe(MainPage.titleText);
    })
    test("Available examples menu",async () => {
        const exampleMenuList = await MainPage.getExampleMenu;
        for (const i of exampleMenuList) {
            const text  = await BaseElements.getElementText(i)
            expect(text).toBe(ExampleMenu[text as ExampleMenu]);
        }
    })
    test("'Fork me on github' message is displayed",async () => {
        const forkMeIsDisplayed = await BaseElements.checkElementDisplay(BasePage.getForkMeOnGithub);
        expect(forkMeIsDisplayed).toBeTruthy();
    })
    test("'Fork me on github' message url value",async () => {
        const hreValue = await Links.getHrefValue(BasePage.getForkMeOnGithub);
        expect(hreValue).toBe(BasePage.formMeOnGithubUrl);
    })
    test("Go to 'Add/Remove Elements' page",async () => {
        const addRemoveElementsButton = await MainPage.getExampleMenuElement(ExampleMenu["Add/Remove Elements"]);
        await BaseElements.clickElement(addRemoveElementsButton);
        expect(await Browser.getCurrentUrl).toBe(Add_remove_elementsPage.url);
    })
})