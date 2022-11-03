/*
#### Task 6 💻
! Для enum можно использовать Object.values
Есть таблица:
    [/!*[Товар, Скидка в процентах, Цена без скидки], *!/['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]
Описать enum, где содержатся все доступные товары (числовой или строковый, по желанию)
Описать функцию, которая принимает параметром один из элементов енама и массив (тип [string, number, number][]) и возвращает сумму со скидкой для этого товара
*/
enum goodsEnum {
    Огурец = "Огурец",
    Помидор = "Помидор",
    Молоко = "Молоко",
    Кефир ="Кефир",
    Соль = "Соль",
    Сахар = "Сахар"
}

function getPriceWithDiscount (param : goodsEnum, goodsArr : [string, number, number][]): number {
    let priceWithDiscount = 0;
    goodsArr.forEach((value, index) => {
        if (param == value[0]) {
            priceWithDiscount = (1 - value[1] / 100) * value[2]
        }
    })
    return priceWithDiscount;
}

console.log(getPriceWithDiscount(goodsEnum.Помидор,[['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]), );
