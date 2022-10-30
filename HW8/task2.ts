/*
#### Task 2 🖥

Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

    > ['member 1: Darya', 'member 2: Masha', ... etc]

    ```javascript
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
```*/
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
 const changedUsers = users.map(function (value, index, array){
    return `member ${index+1}: ${value}`;
})

console.log(changedUsers);