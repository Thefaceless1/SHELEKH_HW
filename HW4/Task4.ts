/*
#### Task 4 💻
Дана произвольная строка. Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет.
 Если оканчивается, вывести предложение - `Данное предложение закончено`, если нет, то `В конце предложения не хватает точки`*/
const someStringTask4 = "some text."
const resultTask4 = (someStringTask4.endsWith(".")) ? "Данное предложение закончено" : "В конце предложения не хватает точки" ;
console.log(resultTask4);