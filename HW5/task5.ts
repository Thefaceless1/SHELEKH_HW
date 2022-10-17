/*
#### Task 5 💻
Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

    ```
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```*/
let sum = 0;
function getSum (a: number, b: number) {
    let difference: number;
    if (a<b) {
        difference = b-a;
        for (let i = 0 ; i <= difference ; i++) {
            sum +=a;
            a++;
        }
        return sum;
    }
    else if (a>b) {
        difference = a-b;
        for (let i = 0; i<=difference ; i++) {
            sum+=b;
            b++;
        }
        return sum;
    }
    else return a;
}

console.log(getSum(1,5));