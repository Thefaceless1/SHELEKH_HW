/*
#### Task 1 💻

Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.
    Конструкт родительского класса принимает переменные марку авто и тип двигателя.
    Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто.
    Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>.Approximetly cost of the car is <LuxuryCar>`.
(В задании используйте не только public модификатор, где это возможно)*/

class Car {
     protected carName : string
     protected engineType  : string

     protected constructor(carName : string, engineType  : string) {
        this.carName = carName
        this.engineType = engineType
    }

}

class SportCar extends Car {
    public constructor(carName:string,engineType: string) {
        super(carName,engineType);
    }
    public getCostAndMaxSpeed (speed : number,cost : number) : string {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${speed}km/h.Approximetly cost of the car is ${cost}$`;
    }
}

class LuxuryCar extends Car {
    public constructor(carName: string, engineType: string) {
        super(carName,engineType);
    }
    public  getCostAndMaxSpeed (speed : number,cost : number) : string {
         return new SportCar(this.carName,this.engineType).getCostAndMaxSpeed(speed,cost)//сделал так чтобы не дублировать return из  getCostAndMaxSpeed класса SportCar
    }
}

const bmw = new SportCar("bmwM3","diesel");
const audi = new LuxuryCar("audiA7","dieles");


console.log(bmw.getCostAndMaxSpeed(300,15000));
console.log(audi.getCostAndMaxSpeed(230,11000));
