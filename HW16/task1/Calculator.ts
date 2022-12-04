/*
#### Task 1 💻
- Реализовать класс калькулятор, который принимает имеет несколько методов (сложение, вычитание, умножение, деление, и еще любой/любые на выбор) и принимает 2 параметра: 2 цифры и операция
- Написать 10 положительных и отрицательных тестов (методов) по вызову данных функции,
 которые в зависимости от переданных аргументов и ожидаемого результата выводит либо: что "тест" прошел, либо что "тест" свалился
*/

export class Calculator {

    constructor() {
    }

// сделал для любого кол-ва цифр все методы кроме возведения в степень
    public sumNumbers(...numbers: number[]): number {
        const sumResult = (numbers.length == 0) ?
            0 :
            numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
        return sumResult;
    }

    public divideNumbers(...numbers: number[]): number | string {
        if (numbers.includes(0)) return "Cant divide by zero";
        else {
            const divideResult = (numbers.length == 0) ?
                0 :
                Number(numbers.reduce((previousValue, currentValue) => previousValue / currentValue).
                toFixed(2));
            return divideResult;
        }
    }

    public multiplyNumbers(...numbers: number[]): number {
        const multiplyResult = (numbers.includes(0) || numbers.length == 0) ?
            0 :
            Number(numbers.reduce((previousValue, currentValue) => previousValue * currentValue).
            toFixed(2));
        return multiplyResult;
    }

    public subtractNumbers (...numbers : number[]) : number {
        const subtractResult = (numbers.length == 0) ?
            0 :
            numbers.reduce((previousValue, currentValue) => previousValue-currentValue);
        return subtractResult;
    }

    public powNumbers (num : number, pow : number) : number {
        switch (pow) {
            case 0 : return 1; break;
            case 1 : return num; break;
            default : return Math.pow(num,pow);
        }
    }
}

