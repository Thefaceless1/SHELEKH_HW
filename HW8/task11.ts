/*
#### Task 11 🖥

Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age.
    Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.*/
const userData = {name1: 'Петр', surname: 'Петров', age: '', };
for (const i in userData) {
    if (i == "name1" && userData[i] == '') userData[i] = "Аноном";
    else if (i == "surname" && userData[i] == '') userData[i] = "Анонимович";
    else if (i == "age" && userData[i] == '') userData[i] = "? лет";
}
const {name1,surname,age} = userData
console.log(name1,surname,age);


