/*
### Task 3 🖥

Дан обьект:

    ```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. */
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let i  in student) {
    const key = i as keyof typeof student;
    console.log(`ключ: ${key}, значение ключа: ${student[key]}`)
}