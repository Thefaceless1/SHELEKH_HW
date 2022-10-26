/*
#### Task 5 🖥

Дан массив:

    ```javascript
    const cats = ['Gachito', 'Tom', 'Batman']
```

Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`***/
const cats = ['Gachito', 'Tom', 'Batman']

for(const i of cats) {
    console.log(i);
}
for( let c=0; c<cats.length; c++) {
    console.log(cats[c]);
}