/*
#### Task 16 Advanced 💻
Вывести сообщение пользователю (отображаться должно в несколько строк):
"Введите цифру из меню:
1. Калькулятор
2. Предсказание
3. Игра угадай"
Пользователь должен ввести число от 1 до 3.
Если вводится что-то другое, то отображается "Неправильный ввод. Попробуйте еще раз" и то же самое меню (можно использовать console.clear() для очистки консоли).
###### В случае выбора 1 пользователю предлагается ввести 2 числа и действие из списка (можно вывести также в виде выбора пунктов меню):
Сложение
Вычитание
Умножение
Деление
Возведение в степень
Остаток от деления 1 числа на 2
###### В случае выбора 2 пользователю последовательно предлагается ввести отчество, возраст и 3 любых животных в формате "конь, пёс, жираф".
    После вопросов вывести:
    Имя вашего отца начинается с <3-5 первых букв отчества>
Вы родились в *** году
Вероятно, но не точно, что в прошлой жизни вы были <одно из введенных животных>
###### Пользователю предлагается ввести строку (от 5 до 15 символов) или число (от 5 до 15). Далее пользователь должен угадать:
    Число (n): если число больше 15, то берётся 15, рандомно берется число от 1 до n.
Строка (n - длина строки): если строка больше 15 символов, то используются только первые 15, рандомно берется символ строки.
    У пользователя n / 3 (округление в большую сторону) попыток угадать число либо символ.
    При правильном ответе: "Поздравляем, Вы выиграли"
При неправильном: "А вот и нет. Еще варианты?"
Если закончились попытки, но ответ неправильный: "В этот раз как-то не удалось, заходите еще"*/

const readline4 = require("readline-sync");
function myProgram () {
    const numberFromMenu = +readline4.question("Введите цифру из меню:\n1.Калькулятор\n2.Предсказание\n3.Игра угадай\n");
    if (numberFromMenu === 1) {
        console.clear();
        const numberOneCalc = +readline4.question("Введите первое число: ");
        const numberTwoCalc = +readline4.question("Введите второе число: ");
        console.clear();
        const calcChoice = +readline4.question("Введите номер строки с желаемой операцией:\n1.Сложение\n2.Вычитание\n3.Умножение\n4.Деление\n5.Возведение в степень\n6.Остаток от деления 1 числа на 2\n");
    } else if (numberFromMenu === 2) {
        console.clear();
        const userPatronymic = readline4.question("Введите отчество: ");
        const userAge = +readline4.question("Введите ваш возраст: ");
        const userAnimal = readline4.question("Введите 3 любых животных в формате \"конь, пёс, жираф\": ").split(", ");
        console.clear();
        const fatherName = userPatronymic.slice(0,3);
        const yearOfBirth = new Date().getFullYear() - userAge;
        const randomAnimal = Math.round(Math.random() * userAnimal.length);
        console.log(`Имя вашего отца начинается с "${fatherName}"`);
        console.log(`Вы родились в ${yearOfBirth} году`);
        console.log(`Вероятно, но не точно, что в прошлой жизни вы были "${userAnimal[randomAnimal]}"`);
    } else if (numberFromMenu === 3) {
        console.clear();
        let numberOrString = readline4.question("Введите строку (от 5 до 15 символов) или число (от 5 до 15):\n");
        const numberOrStringLength: number= numberOrString.length;
        console.clear();
        if (!isNaN(+numberOrString) && +numberOrString<=15) {
            numberOrString = Math.round(Math.random()*(+numberOrString-1) +1);
        }
        else if (!isNaN(+numberOrString) && +numberOrString>15) {
            numberOrString = Math.round(Math.random()*(15-1) +1);
        }
        else if (isNaN(+numberOrString) && numberOrString.length<=14) {
            numberOrString = numberOrString[Math.round(Math.random()*(numberOrString.length))];
        }
        else if (isNaN(+numberOrString) && numberOrString.length>14) {
            numberOrString = numberOrString[Math.round(Math.random()*14)];
        }
        else;
        switch (true) {
            case !isNaN(+numberOrString) : {
                for (let i = 1; i<=Math.ceil(numberOrString/3); i++){
                    let enteredNumber = (i==1) ? readline4.question ("Угадайте число:\n") : readline4.question("А вот и нет. Еще варианты?\n");
                    if (enteredNumber == numberOrString){
                        console.log("Поздравляем, Вы выиграли");
                        break;
                    }
                    else if (i == Math.ceil(numberOrString/3)) {
                        console.clear();
                        console.log("В этот раз как-то не удалось, заходите еще");
                    }
                    else continue;
                }
                break;
            }
            case isNaN(+numberOrString) : {
                for (let c = 1;c<=Math.ceil(numberOrStringLength/3); c++) {
                    let enteredString = (c==1) ? readline4.question ("Угадайте букву в строке:\n") : readline4.question("А вот и нет. Еще варианты?\n");
                    if (enteredString==numberOrString) {
                        console.log("Поздравляем, Вы выиграли");
                        break;
                    }
                    else if (c == Math.ceil(numberOrStringLength/3)) {
                        console.clear();
                        console.log("В этот раз как-то не удалось, заходите еще");
                    }
                    else continue;
                }
            }
        }
    }
    else {
console.clear();
console.log("Неправильный ввод. Попробуйте еще раз")
myProgram();
    }
}

myProgram();