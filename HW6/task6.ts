/*
#### Task 6 🖥
Создать валидатор, 2 метода: валидатор и логин. Первый метод принимают у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
    Второй метод принимает данные пользователя и объект зарегестрированного пользователя. Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**. */
const readline6 = require("readline-sync");
type loginAndPas = {
    login: any,
    password: any
}
const registeredUserData :loginAndPas = {
    login:"asd",
    password : "qwe123"
}

function checkEnteredData () {
    const enteredLogin = readline6.question("enter login: ");
    const enteredPassword = readline6.question("enter password: ");
    const enteredUserData : loginAndPas = {
        login: enteredLogin,
        password : enteredPassword
    };
    if (enteredUserData.password === registeredUserData.password && enteredUserData.login === registeredUserData.login ) {
        return "Добро пожалоВать";
    }
    else return "Неверные данные" ;
}
console.log(checkEnteredData());