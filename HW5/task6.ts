/*
#### Task 6 💻
Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

    + булевое значение
+ функцию **foo** которая выводит в консоль свое имя
+ функцию **boo** которая выводит в консоль свое имя

> Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**
*/


function fooboo (param: any){
    if (param==true) {
        foo();
    }
    else {
        boo();
    }
}
function foo()   {
    return console.log("foo");
}
function boo() {
    return console.log("boo");
}
fooboo(foo);