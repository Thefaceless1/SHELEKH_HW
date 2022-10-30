/*
#### Task 7 🖥

Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
*/
const someArr2 = [8,11];
const isEven = someArr2.every(value =>
    String(Math.pow(value,2)).split("").map(value1 => +value1).reduce((previousValue, currentValue) => previousValue+currentValue)%2 ==0)
console.log(isEven);
