/*
#### Task 2 💻
На https://store.steampowered.com/ вывести в консоль названия, жанры и цены для каждой из игр для #tab_newreleases_content элемента.*/

import {Browser, Builder, Button, By, Key, until, WebDriver} from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import {path} from "chromedriver";

type TGames = {
    name : string,
    price : string,
    genre : string[]
}

async function getGamesInfo() {
    const service = new chrome.ServiceBuilder(path);
    const driver : WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    await driver.manage().window().maximize();


    const result : TGames[] =[];
    await driver.get("https://store.steampowered.com/");

    await driver.wait(until.elementsLocated(By.xpath("//*[@id='tab_newreleases_content']//*[@class='tab_item_name']")));
    const namesList = await driver.findElements(By.xpath("//*[@id='tab_newreleases_content']//*[@class='tab_item_name']"));
    const priceList = await driver.findElements(By.xpath("//*[@id='tab_newreleases_content']//*[@class='discount_final_price']"));
    const genreList = await driver.findElements(By.xpath("//*[@id='tab_newreleases_content']//*[@class='tab_item_top_tags']"));

    for (const i of namesList) {
        const index = namesList.indexOf(i);
        result.push(
            {
                name  : await namesList[index].getText(),
                price : await priceList[index].getText(),
                genre : await genreList[index].getText().then(value =>value.split(", "))
            }
            )
    }
    console.log(result);
    await driver.quit();
}

getGamesInfo();