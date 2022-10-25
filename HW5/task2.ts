/*
#### Task 2 💻
Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

    + процентная ставка в год — 17%,
    + количество лет — 5.
> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.*/
const countYears = 5;
const percentPerYear = 17;
let overpayment = 0;
const countMonth = countYears*12
function creditCalculator (sumCredit:number) {
    const paymentPerMonth = sumCredit / countMonth;
for (let i = 1 ; i<=countMonth ; i++) {
    overpayment += sumCredit * (percentPerYear/100) / 12;
    sumCredit -= paymentPerMonth;
}
return overpayment;
}

console.log(creditCalculator(1000));
