/*
#### Task 9 💻
Дана произвольное число. Реализовать метод проверяющий является ли это число целочисленным или нет. Если является - вывести его, если нет - округлить до целой части.*/
const numberTask9 = 2.831;
const resultTask9 = (numberTask9 === Math.trunc(numberTask9)) ? numberTask9 : Math.round(numberTask9);
console.log(resultTask9);