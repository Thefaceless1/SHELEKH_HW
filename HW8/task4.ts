/*
#### Task 4 🖥

Используя метод **`reduce`** получите сумму всех чисел массива.

    ```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```*/
const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumNumbersOfArr = fibonacci1.reduce((previousValue,currentValue) =>previousValue+currentValue )
console.log(sumNumbersOfArr);