/*

#### Task 6 🖥

Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.

*/
const someArr = [1,5,7,2,15];
console.log(someArr.some(value => (value%3==0 && value%5==0)));
