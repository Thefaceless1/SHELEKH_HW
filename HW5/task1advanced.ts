/*
#### Task 1 👨‍🏫
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
    Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.*/

 function triangle (a:number, b:number,c:number) {
     return (a+b>c && a+c>b && b+c>a) ? true : false;
 }
 console.log (triangle(5,3,6));