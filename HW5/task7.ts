/*
#### Task 7 💻
Напишите самовызыввающиеся функцию подсчет факторила числа: число должно передаваться как параметр функции*/
function factorial (num: number) :number {
    if (num>=1) {
        return num * factorial(num - 1);
    }
    else  return 1;
}

console.log(factorial(6));

