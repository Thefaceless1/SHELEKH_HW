/*
#### Task 7 🖥

Дан массив:

    ```javascript
    const binary = [0, 0, 0, 0]
```

+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.

> [0, 0, 0, 0] -> '0101010'*/
const binary = [0, 0, 0, 0];
let i =1;
binary.forEach(function (value, index, array){
    binary.splice(i,0,1);
    i+=2;
})
const arrAsStr = binary.slice(0,binary.length-1).join("")
console.log(arrAsStr);