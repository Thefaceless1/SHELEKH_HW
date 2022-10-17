/*
#### Task 15 💻
Попросить пользователя ввести что-либо.Вывести, сколько секунд он писал (с математическим округлением) и сумму всех цифр в тексте*/
const readline3 = require("readline-sync");
const prevDateSec = new Date().getTime()/1000
let someText = readline3.question("Enter something: ");
const currDateSec = new Date().getTime()/1000
console.log("Время написания: " + Math.round(currDateSec - prevDateSec));
let totalCount=0;
for ( let i of someText) {
    if (!isNaN(+i)) {
        totalCount+=+i;
    }
}
console.log("Сумма цифр в тексте: " + totalCount);

