/*
#### Task 4 👨‍🏫

Создать массив длинной не менее 5, из динамически созданных случайных чисел.
    Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.
*/
const randomNumbersArr = [2,5,-3,10,6]
const modifyArr = randomNumbersArr.map(value => Math.pow(value,3));
console.log(randomNumbersArr,modifyArr);