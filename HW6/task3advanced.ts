/*
#### Task 3 🖥

Дан объект cat. Склонируйте его 2 способами, и подтвердите, что при изменении поля в 1ом объекте, это же поле не меняется во втором и третьем объекте. Объекты должны быть описаны с помощью типа или интерфейса

    ```javascript
const cat = {
      name: 'Енчик',
      age: 3,
   }
```*/
type catType = {
    name: string,
    age: number
}
const cat :catType = {
    name: 'Енчик',
    age: 3,
}
const cat2: catType = Object.assign({},cat);
const cat3: catType = {...cat};
console.log(cat);
console.log(cat2);
console.log(cat3);
cat.age =5;
cat.name= "Свинка";
console.log(cat);
console.log(cat2);
console.log(cat3);
