/*
#### Task 2 👨‍🏫
+ Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит.
Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
+ Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
+ Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.*/
let destructionCountN = 0;
let destructionCountM = 0;
let sumCount;
function chocolateDestruction (n:number,m:number) {
    if (n>m && m !=0) {
        do {
            destructionCountN++;
        }
        while (destructionCountN<n)
        sumCount = destructionCountN*m -1;
        return sumCount;
    }
    else if (m>n && n !=0) {
        do {
            destructionCountM++;
        }
        while (destructionCountM < m)
        sumCount = destructionCountM * n -1;
        return sumCount;
    }
    else if (m == n) {
        sumCount = n*m -1;
        return sumCount;
    }
    else return 0;
}

console.log(chocolateDestruction(5,3));
