import {BasePage} from "./base-page.js";
import {Locator, Page} from "@playwright/test";
import {TestFilesReader} from "../helpers/testfiles-reader.js";

export class UploadPage extends BasePage {
    public static readonly url: string = "https://the-internet.herokuapp.com/upload";
    public static readonly successMessage = "File Uploaded!";

    public static getChooseFileButton(page: Page): Locator {
        return page.locator("//input[@id='file-upload']");
    }

    public static getUploadButton(page: Page): Locator {
        return page.locator("//input[@id='file-submit']");
    }

    public static async chooseFile(page: Page, fileNumber: number) : Promise<void> {
        await this.getChooseFileButton(page).setInputFiles(TestFilesReader.getPathFiles[fileNumber]);
    }

    public static getSuccessMessage(page: Page): Locator {
        return page.locator("//*[text()='File Uploaded!']");
    }

    public static getSelectedFile(page: Page): Locator {
        return page.locator("//*[@id ='uploaded-files']");
    }

    public static getDragAndDropWindow(page: Page): Locator {
        return page.locator("//*[@id ='drag-drop-upload']");
    }

    public static async chooseFiles(page: Page): Promise<void> {
        const fileChooserPromise = page.waitForEvent('filechooser');
        await this.getDragAndDropWindow(page).click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(TestFilesReader.getPathFiles);
    }

    public static getSelectedFiles(page: Page)  {
        return page.locator("//span[contains(text(),'testfile')]");
    }
}