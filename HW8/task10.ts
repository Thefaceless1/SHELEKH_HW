/*
#### Task 11 🖥

Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
    Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'.
    Первый элемент никуда записывать не надо.
*/
const someArr3 = [2,5];
let elem2 = (someArr3.length>=2) ? someArr3.find((value, index) => index==1) : "bbb";
let elem3  = (someArr3.length>=3) ? someArr3.find((value, index) => index==2) : "eee";
console.log(elem2 ,elem3);

