/*
#### Task 3 👨‍🏫

Дан массив:

    ```javascript
   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
```

Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. */
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
function getSortedNumbers (arr: number[]) {
    let negativeNumbers: number[]=[];
    let positiveNumbers: number[]=[];
    arr.forEach(function (value){
        if (value<0)
            negativeNumbers.push(value);
        else positiveNumbers.push(value);
    })
    return {positiveNumbers,negativeNumbers}
}

console.log(getSortedNumbers(mixedNumbers));