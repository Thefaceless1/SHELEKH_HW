/*
#### Task 13 💻
Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне. Диапазон задается аргументами фунции*/
function randomNumber1 (numberFrom:number, numberTo:number) {
    return  console.log (Math.random() * (numberTo - numberFrom) + numberFrom);
}
randomNumber1(2,7);