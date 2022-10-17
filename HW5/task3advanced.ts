/*
#### Task 3 👨‍🏫
+ Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете.
 Вы также будете покупать аксессуары для каждого из телефонов.
+ После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
+ Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
+ Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
+ Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.*/
const tax = "13.123%";
const phoneCost = "1000.2345$";
const accessoireCost = "50.2345$";
let phoneAndAccesoireCost: number;
let taxCost: number;
let priceWithTax: number;
let fullPricePhones: number =0;

function formattingPhoneCost () {
    phoneAndAccesoireCost = +(parseFloat(phoneCost) + parseFloat(accessoireCost)).toFixed(2);
    return phoneAndAccesoireCost;
}

function taxCostCalculation() {
    taxCost = (100 + +parseFloat(tax).toFixed(2))/100;
    return taxCost;
}

function calculationCost (userMoney: number) {
 priceWithTax = +(taxCostCalculation() * formattingPhoneCost()).toFixed(2);
 if (userMoney>=priceWithTax) {
for (let i =priceWithTax; i<userMoney;i+=priceWithTax) {
    console.clear();
    fullPricePhones+=priceWithTax;
    console.log(`Цена за один телефон с аксессуаром(с учетом налога):${priceWithTax}$\nОбщая стоимость купленных телефонов с аксессуарами( с учетом налога):${fullPricePhones.toFixed(2)}$\nКоличество купленных телефонов с аксессуаром:${Math.trunc(fullPricePhones/priceWithTax)}\nУ вас осталось денег:${(userMoney-fullPricePhones).toFixed(2)}$`)
}
 }
 else {
     console.clear();
     console.log(`Недостаточно денег\nВаш баланс:${userMoney}$\nЦена за один телефон с аксессуаром(с учетом налога):${priceWithTax}$`);
 }
}


calculationCost(11250);