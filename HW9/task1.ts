/*
#### Task 1 💻
Написать класс, принимающий строку (`str`), число (`symNum`) и символ (`sym`)
-создать геттер, который возвращает есть ли в строке `sym`
геттер, который возвращает символ `symNum` в строке `str`.
    Если `symNum` больше, чем символов в `str`, возвращает случайный символ
метод, который принимает коллекцию Map со строками,
    и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`
вывести все созданные геттеры и поле `str`*/

class FirstClass {
    static str:string = "123qweasd12"
    static symNum:number = 15
    static sym:string = "s"

    static get checkSymbol () {
        return this.str.split("").some(value => value==this.sym);
    }
    static get returnSymbol () {
        return this.str.split("").find(value => value == this.sym);
    }
    static get getRandomSymbol () {
        if (this.str.length<this.symNum) return this.str.split("")[Math.round(Math.random()*this.str.length)]
    }
    static changeStr (map:any) {
        map = Array.from(map);
        const changedStr = this.str.split(map[0][0]).join(map[0][1]).
        split(map[1][0]).join(map[1][1]);
        return changedStr;
    }

}
const randomMap = new Map([['12', '-'], ['ea', '*']]);
console.log(FirstClass.checkSymbol);
console.log(FirstClass.returnSymbol);
console.log(FirstClass.getRandomSymbol);
console.log(FirstClass.changeStr(randomMap));
