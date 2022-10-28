/*
#### Task 3 🖥

С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

    ```javascript
    const numbers = [7, -4, 32, -90, 54, 32, -21]
```*/
const numbers2 = [7, -4, 32, -90, 54, 32, -21];
const sortNumbers = numbers2.filter(value => value>0);
console.log(sortNumbers);