/*
#### Task 3 💻
Зайти на https://stackoverflow.com/.
    Вывести в консоль текст 4 карточек (Accounts: Free, Basic, RECOMMENDED, Enterpice).
По каждой карточке в формате: Type: Free, Price: Free,
    Description: ['ChatOps integrations - Slack & Microsoft Teams', ...],
    Teammates: Always free up to 50 teammates*/
import {Browser, Builder, Button, By, Key, until, WebDriver} from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import {path} from "chromedriver";

type TAccountsInfo = {
    accountName : string,
    price: string,
    teammates : string,
    description : string[]

}
async function getAccountsInfo() {
    const service = new chrome.ServiceBuilder(path);
    const driver : WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    await driver.manage().window().maximize();

    const result : TAccountsInfo[] =[];
    await driver.get("https://stackoverflow.com/");
    const accountNames = await driver.findElements(By.xpath("//*[contains(@class,'px8 py4 as-start bar-sm')]"));
    const accountPrices = await driver.findElements(By.xpath("//*[@class='js-billed-annually' or @class='p-ff-roboto-slab-bold fw-bold fs-headline1 p-font-smooth lh-xs pt12 mb6'][not(.//span)]"));
    const accountTeammates = await driver.findElements(By.xpath("//p[@class='fc-black-300 mb0 ta-center pt12']"));
    const accountDesc = await driver.findElements(By.xpath("//div[contains(@class,'fs-body2 d-flex fd-column')]"));

    for(const i of accountNames) {
        const index = accountNames.indexOf(i);
        result.push(
            {
                accountName : await accountNames[index].getText(),
                price : await accountPrices[index].getText(),
                teammates : await accountTeammates[index].getText(),
                description : await accountDesc[index].getText().then(value => {
                    let arrValue : string[]  = value.split("\n");
                    const firstNotDescStr : number = 3;
                    const lastNotDescStr : number =2;
                    arrValue = arrValue.slice(firstNotDescStr,arrValue.length-lastNotDescStr).
                    map(value1 => {
                        const deletePlus : string = " plus…";
                        if(value1.includes(deletePlus)) return value1.slice(0,value1.length-deletePlus.length);
                        return value1;
                    });
                    return arrValue;
                }
                )
            }
        )
    }
    console.log(result);
    await driver.quit();
}

getAccountsInfo();