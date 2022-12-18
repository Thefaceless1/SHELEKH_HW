/*
#### Task 1 💻
- Написать минимум 5 UI тестов для сайта: https://catalog.onliner.by/
    - При написании использовать различные типы селекторов и локаторов
- Добавить методы ожидания элементов
- Добавить проверки элементов/текстовых значений*/

import {Browser, Builder, Button, By, Key, until, WebDriver} from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import {path} from "chromedriver";
import {jest, test, expect, describe, beforeAll} from "@jest/globals";
import {CatalogMenu} from "./CatalogMenu";
import {SocialMediaUrl} from "./SocialMediaUrl";
import {SearchSources} from "./SearchSources";
import {ElectroMenuList} from "./ElectroMenuList";

jest.setTimeout(20000);
describe("Проверка страницы каталога онлайнера", () => {
    let driver : WebDriver;
    beforeEach(async () => {
        const service = new chrome.ServiceBuilder(path);
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        await driver.manage().window().maximize();
        await driver.get("https://catalog.onliner.by/")
    })
    afterEach(async () => {
        await driver.quit();
    })

    test("Список наименований меню каталога",async () => {
        const catalogMenu = await driver.findElements(By.xpath("//*[@class='catalog-navigation-classifier__item-title-wrapper']"));
        for ( const i of catalogMenu) {
            const index = catalogMenu.indexOf(i);
            expect(await i.getText()).toBe(CatalogMenu[index]);
        }
    })
    test("Цвета фона, цвет текста и текст  сообщения 'Все суперцены' ",async () => {
        const superPriceList = await driver.findElements(By.xpath("//*[contains(@class,'navigation__bubble_primary')]"));
        for (const i of superPriceList) {
            const index = superPriceList.indexOf(i);
            expect(await superPriceList[index].getCssValue("background-color")).toBe("rgba(253, 16, 0, 1)");
            expect(await superPriceList[index].getCssValue("color")).toBe("rgba(255, 255, 255, 1)");
            expect(await superPriceList[index].getText()).toContain("Все суперцены");
        }
    })
    test("Url для кнопок перехода в соц. сети Onliner",async () => {
        const socialMediaUrlList = await driver.findElements(By.xpath("//*[contains(@class,'footer-style__social-button footer-style__social-button')]"));
        for (const i of socialMediaUrlList) {
            const index = socialMediaUrlList.indexOf(i);
            expect(await i.getAttribute("href")).toBe(SocialMediaUrl[index]);
        }
    })
    test("Список источников поиска в окне поиска",async () => {
        const searchInput = await driver.findElement(By.xpath("//input[@class='fast-search__input']"));
        await driver.actions().click(searchInput).sendKeys("hello").perform();
        const searchSourceList = await driver.findElements(By.xpath("//*[contains(@class,'search__tabs-item')]"));
        for (const i of searchSourceList) {
            const index = searchSourceList.indexOf(i);
            expect(await i.getText()).toBe(SearchSources[index]);
        }
    })
    test("Список найденных значений в источнике 'в каталоге' после ввода поискового запроса", async () => {
        const stringForSearch = "hello Mar";
        const searchInput = await driver.findElement(By.xpath("//input[@class='fast-search__input']"));
        await driver.actions().click(searchInput).sendKeys(stringForSearch).perform();
        const searchFrame = await driver.findElement(By.xpath("//iframe[@class='modal-iframe']"));
        await driver.switchTo().frame(searchFrame);
        await driver.wait(until.elementsLocated(By.xpath("//a[@class='product__title-link']")));
        const foundResultsList = await driver.findElements(By.xpath("//a[@class='product__title-link']"));
        for (const i of foundResultsList) {
            for(const n of stringForSearch.split(" ")){
                expect(await i.getText().then(value => value.toLowerCase().includes(n.toLowerCase()))).toBeTruthy();
            }
        }
    })
    test("Значения выпадающего списка после нажатия на меню каталога 'Электроника' ",async () =>{
        const electroButton = await driver.findElement(By.xpath("//li[@data-id='1']"));
        await electroButton.click();
        await driver.wait(until.elementsLocated(By.xpath("(//*[@class='catalog-navigation-list__aside-list'])[2]//*[@class='catalog-navigation-list__aside-title']")));
        const electroMenuList= await driver.findElements(By.xpath("(//*[@class='catalog-navigation-list__aside-list'])[2]//*[@class='catalog-navigation-list__aside-title']"));
        for (const i of electroMenuList) {
            const index = electroMenuList.indexOf(i);
            expect(await i.getText()).toBe(ElectroMenuList[index]);
        }
    })
})





