/*
#### Task 1 💻
Зайти на 5 разных ссылок в https://the-internet.herokuapp.com/ (можно с помощью клика, можно через url).
    С каждой страницы для 2-3 элементов вывести в консоль одно из: значение атрибута, value, текст.*/

import {Browser, Builder, Button, By, Key, until, WebDriver} from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import {path} from "chromedriver";



async function getElements () {
    const service = new chrome.ServiceBuilder(path);
    const driver : WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    await driver.manage().window().maximize()

    //находим строку со ссылкой на страницу с чекбоксами и выводим ее цвет
    await driver.get("https://the-internet.herokuapp.com/");
    const checkboxes = await driver.findElement(By.xpath("//a[@href='/checkboxes']"));
    console.log(await checkboxes.getText(),await checkboxes.getCssValue("color"));

    //находим первый чекбокс и проверяем выбран он или нет и выводим его размер:
    await driver.actions().click(checkboxes).perform();
    const firstCheckbox = await driver.findElement(By.xpath("//*[@id='checkboxes']/input[1]"));
    console.log(await firstCheckbox.isSelected(),await firstCheckbox.getCssValue("font-size"));

    //кликаем по чекбоксу и проверяем выбран он или нет:
    await driver.actions().click(firstCheckbox).perform();
    console.log(await firstCheckbox.isSelected());

    //находим элемент гиперссылку и получаем его url
    const seleniumLink = await driver.findElement(By.xpath("//*[@target='_blank' and text()='Elemental Selenium']"));
    console.log(await seleniumLink.getAttribute("href"));

    //возвращаемся в главное меню и перехрдим на страницу выбора фрейма
    await driver.navigate().back();
    const frame = await driver.findElement(By.xpath("//a[@href='/frames']"));
    await driver.actions().click(frame).perform();

    //находим кнопку iFrame, нажимаем на нее ,получаем заголовок в открывшемся окне выводим в консоль цвет заголовка
    const iFramesButton = await driver.findElement(By.xpath("//*[@href='/iframe']"));
    await driver.actions().click(iFramesButton).perform();
    const title = await driver.findElement(By.xpath("//h3"));
    console.log(await title.getText(),await title.getCssValue("color"));

    //находим фрейм, переключаемся на него, очищаем введенный по умолчанию текст, вводим свой текст и выделяем его
    await driver.wait(until.elementLocated(By.xpath("//*[@id='mce_0_ifr']")));
    const iFrame = await driver.findElement(By.xpath("//*[@id='mce_0_ifr']"));
    await driver.switchTo().frame(iFrame);
    await driver.wait(until.elementLocated(By.xpath("//*[@id='tinymce']//p")));
    const frameText = await driver.findElement(By.xpath("//*[@id='tinymce']//p"));
    console.log(await frameText.getText());
    await frameText.clear();
    const myText = "new text";
    await frameText.sendKeys(myText);
    for (const i of myText) {
        await driver.actions().keyDown(Key.SHIFT).sendKeys(Key.ARROW_LEFT).perform();
    }
    await driver.actions().keyUp(Key.SHIFT);

    //возвращаемся на страницу, находим и нажимаем на кнопку жирного текста
    await driver.switchTo().defaultContent();
    const boldButton = await driver.findElement(By.xpath("//button[@title='Bold']//span[@class='tox-icon tox-tbtn__icon-wrap']"));
    await boldButton.click();

    //возвращаемся во фрейм, копируем жирный текст и вставляем  10 раз
    await driver.switchTo().frame(iFrame);
    await driver.actions().keyDown(Key.CONTROL).sendKeys(Key.chord("c")).perform();
    for (let i=0;i<10;i++) {
        await driver.actions().keyDown(Key.CONTROL).sendKeys(Key.chord("v")).perform();
    }

    await driver.quit();
}

getElements();

