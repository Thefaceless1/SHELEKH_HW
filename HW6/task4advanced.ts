/*
#### Task 4 🖥

Есть объект с количеством купюр и монет в кассе:
    ```javascript
const obj = {1: 45, 2: 7, 5: 10, 10: 23, 20: 51}
```
Пришло 2 покупателя с купюрой 50.
Первому выдана сдача {2: 3, 5: 2, 20: 1}
Второму выдана сдача {1: 4, 5: 1, 10: 2, 20: 1}
Вывести в результате разницу в сумме, отдельно по каждой купюре*/
const obj  = {1: 45, 2: 7, 5: 10, 10: 23, 20: 51};
const surrenderOfMoneyUser1 = {2: 3, 5: 2, 20: 1};
const surrenderOfMoneyUser2= {1: 4, 5: 1, 10: 2, 20: 1};
const countUsersMoney ={50:2};
let countMoneyAfterPurchases : object ={};
let countMoneyAfterGettingMoney : object ={};

function getMoneyDiffAfterPurchases () {
      countMoneyAfterGettingMoney = Object.assign({},obj);
    for (const i in countMoneyAfterGettingMoney){
        const key = i as keyof typeof countMoneyAfterGettingMoney;
        if(key in countUsersMoney) {
            // @ts-ignore
            countMoneyAfterGettingMoney[key] +=countUsersMoney[key];
            delete (countUsersMoney as any)[key];
        }
    }
    countMoneyAfterPurchases = Object.assign({},countMoneyAfterGettingMoney,countUsersMoney);
    for (const i in countMoneyAfterPurchases){
        const key = i as keyof typeof countMoneyAfterPurchases;
        if (key in surrenderOfMoneyUser1) {
            // @ts-ignore
            countMoneyAfterPurchases[key] -= surrenderOfMoneyUser1[key];
        }
    }
    for (const i in countMoneyAfterPurchases) {
        const key = i as keyof typeof countMoneyAfterPurchases;
        if ( key in surrenderOfMoneyUser2) {
            // @ts-ignore
            countMoneyAfterPurchases[key] -= surrenderOfMoneyUser2[key];
        };
        if(key in obj && key in countMoneyAfterPurchases) {
            console.log(`Разница по купюре ${key} после покупок составила: ${countMoneyAfterPurchases[key] - obj[key]}`)
        }
        else  {
            console.log(`Разница по купюре ${key} после покупок составила: ${countMoneyAfterPurchases[key]}`)
        }
    }
}

getMoneyDiffAfterPurchases();