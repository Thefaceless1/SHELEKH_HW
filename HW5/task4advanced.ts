/*
#### Task 4 👨‍🏫
Пользователь вводит 2 числа (числа могут быть целые и дробные, дробные могут через точку или запятую) через пробел и еще через пробел знак +-*!/%.
Вывести результат действия или запросить еще раз, если что-то введено неправильно (1 число вместо 2, среди числа непонятные символы, неправильный знак)*/
const readline5 = require("readline-sync");
function task4Func () {
    const enteredData =  readline5.question("Введите 2 числа через пробел и еще через пробел знак +-*!/%:\n");
    const enteredDataAsArray = enteredData.split(" ");
    const firstNumber = +enteredDataAsArray[0].replace(",",".");
    const secondNumber = +enteredDataAsArray[1].replace(",",".");
    const mathOperation = enteredDataAsArray[2];
    let result :number =0;
    if (!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber !=0  && enteredDataAsArray.length==3 && (mathOperation == "+" ||
        mathOperation == "-" || mathOperation =="*" || mathOperation == "!" || mathOperation == "/" || mathOperation == "%")) {
        switch (mathOperation) {
            case "+" :result =firstNumber + secondNumber;break;
            case "-" :result =firstNumber - secondNumber;break;
            case "*" :result =firstNumber * secondNumber;break;
            case "!" :result =firstNumber+mathOperation+secondNumber;break;
            case "/" :result =firstNumber / secondNumber;break;
            case "%" :result =firstNumber % secondNumber;
        }
        console.clear();
        return console.log(`Результат: ${result}`)
    }
    else {
        console.clear();
        console.log("Неверный ввод, попробуйте еще раз")
        task4Func();
    }
}

task4Func();