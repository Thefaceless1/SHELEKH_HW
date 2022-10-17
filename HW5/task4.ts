/*
#### Task 4 💻
Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
> Для 2021 это будет 5.*/
let sumDigits = 0;
function getSumNumbers (enteredNumber: number | string) {
    enteredNumber = String(enteredNumber);
    for ( let i of enteredNumber) {
        sumDigits+=+i;
    }
    return sumDigits;
}
console.log(getSumNumbers(2021));

