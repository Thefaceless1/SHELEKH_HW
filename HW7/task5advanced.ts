/*
#### Task 5

Есть случайный массив. Сложить и вывести в консоль все индексы элементов:
строк, содержащих "w"
чисел > 100
 */
const randomArr = [5,3,"word",103,"Work",400,"name",100,"5w"];
let index : number[] =[];
const sumIndex = randomArr.reduce(function (previousValue, currentValue, currentIndex, array): any {
if (currentValue>100 || String(currentValue).includes("w")){
    previousValue = +previousValue + currentIndex;
    index.push(currentIndex);
}
return previousValue;
},0)

console.log(`Индексы элементов строк, содержащих "w" и чисел > 100: ${index}\nСумма индексов: ${sumIndex}`);