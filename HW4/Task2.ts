/*#### Task 2 💻
Дана строка 'я учу typescript!'. Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`*/
const learnTs ="я учу typescript!"
const myResult= (learnTs.includes("учу")) ? learnTs.indexOf("учу") : "Данной подстроки нет";
console.log(myResult);
