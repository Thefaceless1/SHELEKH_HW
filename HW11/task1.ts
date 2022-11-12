/*
#### Task 1 💻

У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.

    Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒
Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

    Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

    Для получения постов использовать https://jsonplaceholder.typicode.com/posts
    Задача может бы ть выполнена через https://jsonplaceholder.typicode.com/comments?postsId=1 либо через setTimeout.
    ###### Реализуйте задачу двумя способами:
- Promise chaining
- Async / await*/

import fetch from "node-fetch";

type TPostData = {
    userId: number,
    id: number,
    title: string,
    body: string
}[];

// первый вариант автоматизированный
async function getSelectedPosts (...num: number[]) {
    const result = [];
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post : Promise<any> = response.json().then(value  => value);
    if (response.ok == true) {
        for (const i of num) {
            result.push(await post.then((value : TPostData) => value[i-1]));
        }
        return result
    }
    else {
        return  new Error("Ошибка");
    }
}
getSelectedPosts(15,23,7,3).then(value => console.log(value));



// 2 вариант примитивный
fetch('https://jsonplaceholder.typicode.com/posts').
    then((value : any) => value.json(), error => console.log(error)).
    then((value : TPostData)  => console.log([value[14],value[22],value[12],value[3]]));

