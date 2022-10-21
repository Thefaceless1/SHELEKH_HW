/*
#### Task 1 💻
Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)*/
 function  getSum (maxNumber:number) {
     let startNumber = 0;
     for (let i = 0; i<=maxNumber; i++) {
         startNumber+=i;
     }
     return startNumber;
 }
 console.log(getSum(100));