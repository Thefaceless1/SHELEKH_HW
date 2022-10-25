/*
#### Task 5 🖥

Дан обьект:

    ```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }
```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
*/
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    misha: 664,
    alexandra: 199
}
let sumSalary =0 ;
let averageSalaries ;

function getAverageSalaries () {
    for (const i in salaries) {
        const key = i as keyof typeof salaries;
        sumSalary+=salaries[key];
    }
    averageSalaries = sumSalary/Object.keys(salaries).length;
    return averageSalaries;
}

console.log(getAverageSalaries());
