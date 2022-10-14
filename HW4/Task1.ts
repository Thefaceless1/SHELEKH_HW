/*#### Task 1 💻
Пользователь передает через переменную свою фамилию и имя. Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр*/

const readline1 = require("readline-sync");
let nameLastName = readline1.question("Введите фамилию и имя:");
console.log(`Привет ${nameLastName}`);
console.log(`Привет ${nameLastName}`.toUpperCase());
console.log(`Привет ${nameLastName}`.toLowerCase());
console.log(`Привет ${nameLastName.toUpperCase()}`);
console.log(`Привет ${nameLastName.toLowerCase()}`);

