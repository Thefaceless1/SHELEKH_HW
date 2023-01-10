import { test, expect,type Page} from '@playwright/test';
import {UploadPage} from "../framework/page-objects/upload-page.js";
import {PlaywrightDevPage} from "../framework/helpers/playwright-dev-page.js";
import {TestFilesReader} from "../framework/helpers/testfiles-reader.js";
import {BaseElement} from "../framework/elements/base-element.js";

test.describe("Upload files page", () => {
    test.beforeEach(async ({page}) => {
       const playwrightDev = new PlaywrightDevPage(page);
       await playwrightDev.goTo(UploadPage.url);

    })
    test(" 'Choose File' button is located and available",async ({page}) =>{
        expect(await UploadPage.getChooseFileButton(page).isVisible()).toBeTruthy();
        expect(await UploadPage.getChooseFileButton(page).isEnabled()).toBeTruthy();
    })
    test("'Upload' button is located and available",async ({page}) => {
        expect(await UploadPage.getUploadButton(page).isVisible()).toBeTruthy();
        expect(await UploadPage.getUploadButton(page).isEnabled()).toBeTruthy();
    })
    test("Choose Files",async ({page}) => {
        for (let i =0; i<TestFilesReader.getPathFiles.length; i++) {
            await UploadPage.chooseFile(page,i);
            //Так и не смог получить атрибут из вкладки properties
            //expect(await UploadPage.getChooseFileButton(page).getAttribute("value")).toContain(TestFilesReader.getFiles[i]);
        }
    })
    test("Upload file", async ({page}) => {
        const selectedFile : string = TestFilesReader.getFiles[1];
        await UploadPage.chooseFile(page,TestFilesReader.getFiles.indexOf(selectedFile));
        await UploadPage.getUploadButton(page).click();
        const textContentOfMessage = await BaseElement.getElementTextContent(UploadPage.getSuccessMessage(page));
        const textContentOfFile = await BaseElement.getElementTextContent(UploadPage.getSelectedFile(page));
        expect(textContentOfMessage).toBe(UploadPage.successMessage);
        expect(textContentOfFile?.trim()).toBe(selectedFile);
    })
    test("Choose files in Drag and Drop window", async ({page}) => {
        await UploadPage.chooseFiles(page);
        const arrayElementsText = await BaseElement.getElementsTextContent(UploadPage.getSelectedFiles(page));
        for (let i =0;i < arrayElementsText.length;i++) {
            expect(arrayElementsText[i]).toBe(TestFilesReader.getFiles[i]);
        }
    })
})