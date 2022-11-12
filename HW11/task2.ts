/*
#### Task 2 💻

+ Реализуйте приложение:
    + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
+ Напишите 2 функции `getTodos` & `getTasks`
+ Функция `getTodos` делает запрос по указанному адресу и забирает данные.
+ Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет) и возвращает массив объектов c айди и названием задачи, {id:number; title: string}[] для всех завершенных или незавершенных (в зависимости от значения параметра) задач
+ Вывести полученный результат в консоль*/
import fetch from "node-fetch";

type TData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}[]

function getTodos () : any {
    return fetch(`https://jsonplaceholder.typicode.com/todos`).
    then(value => value.json());
}

async function getTasks (userId: number , taskStatus : boolean) {
    const getData : TData = await getTodos()
    const result: { id: number; title: string; }[] = [];
    getData.forEach(value => {
        if (value.userId ==  userId && taskStatus == value.completed) result.push({id:value.id,title:value.title});
    })
    return result;
}
getTasks(3,false).then(value => console.log(value));