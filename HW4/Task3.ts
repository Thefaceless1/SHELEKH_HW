/*
#### Task 3 💻
Дана произвольная строка. Реализуйте метод, который принимает позицию символа в строке. Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`*/
const readline2 = require("readline-sync");
const someString = "some text";
const symbolInString = readline2.question("Enter symbol position: ");
const resultTask = (someString.length<+symbolInString) ? "Вы вышли за границу строки" : "" ;
console.log(resultTask);