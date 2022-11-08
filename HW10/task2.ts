/*
#### Task 2 💻

Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя*/
class Users {
    public name: string
     public constructor(name:string) {
        this.name=name
    }
    getName () {
        return `My name is ${this.name}`;
    }

}
const alex = new Users("Alex");
const max = new Users('Max');

console.log(alex.getName());
console.log(max.getName());
