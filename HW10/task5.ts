/*
#### Task 5 💻

Опишите статическую функцию класса, которая принимает Generic параметр одного из типов: boolean, number или string. И возвращает:
для boolean: противоположное значение
для string: если в строке есть скобки, то вывести, не забыли ли закрыть скобку, если нет - `скобок нет`
для числа n: целое число, квадрат которого наиболее близок к n (`1 для n=1,2,3`, `2 для n=4,5,6,7,8`, `3 для 9,10,11...`)
Проверить функцию на все 3 типа*/
 class SomeClass {
     genFunc<T> (param : T) {
         switch (typeof param) {
             case "boolean": return !param; break;
             case "string": return (param.split("").some(value => value == "(" || value == ")")) ?
                 "не забыли ли закрыть скобку?" :
                 "скобок нет"; break;
             case "number" : return  Math.trunc(Math.sqrt(param)); break;
             default: return "укажите параметр одного из типов: boolean, number или string";
         }
     }
 }

 console.log(new SomeClass().genFunc(true));
 console.log(new SomeClass().genFunc("sd v)d"));
 console.log(new SomeClass().genFunc(9));