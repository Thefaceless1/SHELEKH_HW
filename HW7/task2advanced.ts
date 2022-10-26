
/*#### Task 2 👨‍🏫

```javascript
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
```

> Выведите в консоль среднее значение чисел в многомерном массиве.*!/*/


const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let iterationForEach=0;
let currentSum =0;
const averageSum  = matrix.reduce(function (previousValue, currentValue): any  {
    currentValue.forEach(function (value){
        currentSum+=value
        iterationForEach++;
    })
return currentSum/iterationForEach;
},0)

console.log(averageSum);