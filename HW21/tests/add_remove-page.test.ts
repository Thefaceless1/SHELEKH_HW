import {describe} from "@jest/globals";
import {DriverManager} from "../framework/helpers/driver-manager";
import {Browser} from "../framework/helpers/browser";
import {MainPage} from "../page-objects/main-page";
import {BaseElements} from "../framework/elements/base-elements";
import {ExampleMenu} from "../framework/enums/example-menu";
import {Links} from "../framework/elements/links";
import {Add_remove_elementsPage} from "../page-objects/add_remove_elements-page";
import {BasePage} from "../page-objects/base-page";
import {Button} from "../framework/elements/button";

describe("'Add/Remove Elements' page",() => {
    beforeEach(async () => {
        await DriverManager.startDriver;
        await Browser.goToPage(Add_remove_elementsPage.url);
    })
    afterAll(async () => {
        await DriverManager.quitDriver();
    })
    test("page title text",async () => {
        const titleText = await BaseElements.getElementText(BasePage.getPageTitle);
        expect(titleText).toBe(ExampleMenu["Add/Remove Elements"]);
    })
    test("Button 'Add element' is displayed",async () => {
        const buttonIsDisplayed = await BaseElements.checkElementDisplay(Add_remove_elementsPage.getAddElemButton);
        expect(buttonIsDisplayed).toBeTruthy();
    })
    test("Button 'Add element' is enabled",async () => {
        const isButtonEnabled = await Button.checkEnabledStatus(Add_remove_elementsPage.getAddElemButton);
        expect(isButtonEnabled).toBeTruthy();
    })
    test("'Fork me on github' message is displayed",async () => {
        const forkMeIsDisplayed = await BaseElements.checkElementDisplay(BasePage.getForkMeOnGithub);
        expect(forkMeIsDisplayed).toBeTruthy();
    })
    test("'Fork me on github' message url value",async () => {
        const hreValue = await Links.getHrefValue(BasePage.getForkMeOnGithub);
        expect(hreValue).toBe(BasePage.formMeOnGithubUrl);
    })
    test("Appearance one more 'Delete' button  after each click on the 'Add element' button",async () => {
        const clickCount = 10;
        for (let i = 1; i <= clickCount ; i++) {
            await BaseElements.clickElement(Add_remove_elementsPage.getAddElemButton);
            const deleteButtons = await Add_remove_elementsPage.getDeleteButtons;
            expect(deleteButtons.length).toBe(i);
        }
    })
    test("Button 'Add element' is enabled",async () => {
        const clickCount = 5;
        for (let i = 1; i <= clickCount ; i++) {
            await BaseElements.clickElement(Add_remove_elementsPage.getAddElemButton);
            const deleteButtons = await Add_remove_elementsPage.getDeleteButtons;
            expect(await Button.checkEnabledStatus(deleteButtons[deleteButtons.length-1])).toBeTruthy();
        }
    })
    test("Hiding one 'Delete' button after each click on the on yourself",async () => {
        const clickCount = 15;
        for (let i = 1; i <= clickCount ; i++) {
            await BaseElements.clickElement(Add_remove_elementsPage.getAddElemButton);
        }
        for(let i = clickCount; i > 0 ; i--) {
            const deleteButtons = await Add_remove_elementsPage.getDeleteButtons;
            await BaseElements.clickElement(deleteButtons[deleteButtons.length-1]);
            expect(deleteButtons.length).toBe(i);
        }
    })
})