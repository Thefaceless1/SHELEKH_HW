/*
#### Task 12 💻
Реализовать метод получения рандомного целочисленного числа в заданном диапазоне. Диапазон задается аргументами фунции*/
function randomNumber (numberFrom:number, numberTo:number) {
    return  console.log (Math.trunc(Math.random() * (numberTo - numberFrom) + numberFrom));
}
randomNumber(2,7);
