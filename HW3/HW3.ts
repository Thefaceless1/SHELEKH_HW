/*ADVANCED level

Task 1 👨‍🏫

Поменяйте значение переменных местами не создавая дополнительной переменной:

    ```javascript
    let a = 4
    let b = 3
```*/
let a = 4;
let b = 3;
    a=b-a;
    b=b-a;
    a=a+b;
console.log(a);
console.log(b);

/*Task 2 👨‍🏫

Написать программу, которая выполняет следующие операции:

1. Запрашивает у пользователя число.
2. Последовательно задает вопрос:
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
    3. По окончании вывести пользователю результат в консоль, содержащий формулу и результат например:
    > ((((6 - 10) + 5) * 20) / 2 = 110)*/
const readline = require("readline-sync");
let numberOne = +readline.question("Введите число:");
let numberTwo = +readline.question("Сколько отнять:");
let numberThree = +readline.question("Прибавить:");
let numberFour = +readline.question("Умножить:");
let numberFive = +readline.question("Разделить от предыдущео результата:");
let result = (((numberOne-numberTwo) + numberThree) * numberFour) / numberFive;
console.log("((("+numberOne+"-"+numberTwo+")+"+numberThree+")*"+numberFour+")/"+numberFive+"="+result);




/*Task 3 👨‍🏫

Написать программу, которая будет выводить в консоль лесенку.

    ```
    #
    ##
    ###
    ####
    #####
    ######
```*/
let stairs = "#"
for (let i = 0;i<6;i++) {
    console.log(stairs);
    stairs+="#";
}

