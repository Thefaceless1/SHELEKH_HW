/*
#### Task 4 🖥

Дан обьект:

    ```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
```
Вывести в консоль слово красный и синий*/
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
const wordRedAndBlue =`${colors["ru pum pu ru rum"].red} и ${colors["ru pum pu ru rum"].blue}`
console.log(wordRedAndBlue);