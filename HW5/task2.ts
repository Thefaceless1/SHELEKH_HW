/*
#### Task 2 💻
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

    + процентная ставка в год — 17%,
    + количество лет — 5.
> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.*/
const countYears = 5;
const percentPerYear = 17;
let overpayment = 0;
function creditCalculator (sumCredit:number) {
for (let i = 1 ; i<=countYears ; i++) {
    overpayment += sumCredit * (percentPerYear/100);
}
return overpayment;
}

console.log(creditCalculator(100));
