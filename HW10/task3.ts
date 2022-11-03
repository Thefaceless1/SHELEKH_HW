/*
#### Task 3 💻

Создайте два объекта машин.
    Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль.
    В зависимости от контекста выполнения, этот метод должен выводить соответвующую информацию о машинах. К примеру `This car has 3 doors and this is left-hand drive car`*/

class  Car2 {
    doorCount: number;
    rudderSide: string;
    constructor(doorCount: number,rudderSide:string) {
        this.doorCount = doorCount
        this.rudderSide = rudderSide
    }

    getInfo () {
        return `This car has ${this.doorCount} doors and this is ${this.rudderSide} drive car`
    }

}

const carOne = new Car2(2,"left-hand");
const carTwo = new Car2(4,"right-hand");

console.log(`${carOne.getInfo()}\n${carTwo.getInfo()}`)