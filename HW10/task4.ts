/*
#### Task 4 💻

Опишите интерфейс IElectronics.
    У интерфейса есть свойства price - число, electrType - строка, manufacturer - строка и метод turnOn. Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
    Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
и выводит 3 свойства и вызывает метод turnOn.*/

interface IElectronics {
    price : number,
    electrType : string,
    manufacturer : string,
    turnOn () : void
}

class Phone implements IElectronics {
    electrType: string = "electro"
    manufacturer: string = "USA"
    price: number = 3000

    turnOn() {
        console.log("work");
    }
}

class ElektroPila implements IElectronics {
    electrType: string= "manual"
    manufacturer: string = "Mexico"
    price: number = 1000

    turnOn() {
        console.log("not work");
    }
}

function getInfo ( param : IElectronics) {
     param.turnOn();
     return `${param.electrType} ::: ${param.manufacturer} ::: ${param.price}`
}


console.log(getInfo(new Phone()));
console.log(getInfo(new ElektroPila()));