/*
#### Task 3.
Пользователь вводит что-либо.
    Посчитать и вывести сумму цифр в тексте (используя Array.from, reduce)
По 1, 2 и 3 символам в введённой строке вывести общее количество таких символов*/
const readline7 = require("readline-sync");
const someData = readline7.question("Enter something: ")
function getDigits (someString: string) {
const sumDigits  = Array.from(someString).filter((value : any) => (!isNaN(+value) && value !=' ')).map(value => +value).
reduce((previousValue, currentValue) => previousValue+currentValue,0);

let sumFirstThreeSymbols = 0;
Array.from(someString).forEach(function (value){
    if (value == Array.from(someString)[0] || value == Array.from(someString)[1] || value == Array.from(someString)[2]) sumFirstThreeSymbols++;
})


    return `Сумма цифр в текте: ${sumDigits}\nКоличество 1,2 и 3 символов в строке: ${sumFirstThreeSymbols}`;
}
console.log(getDigits(someData));