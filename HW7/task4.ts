/*
#### Task 4 🖥

Дан массив:

    ```javascript
    const students = ['Polina', 'Dasha', 'Masha']
```

    + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.*/
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(students.length-1,1,"Borya");
students.splice(0,1,"Andrey");
console.log(students);