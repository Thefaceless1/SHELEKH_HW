/*
#### Task 3 💻
Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
    + строку
    + значение от
+ значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по*/

function trimString (enteredString : string, numberFrom: number, numberTo: number) {
    return console.log(enteredString.slice(numberFrom +1,numberTo));
}

trimString("asdfg",1,4);