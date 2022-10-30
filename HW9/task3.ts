/*
#### Task 3 💻
Написать класс, который принимает строку (`str`) и число (`classNum`)
(число всегда меньше или равно количеству символов в строке)
написать геттер, который возвращает символ, который наиболее часто повторяется в строке
и метод, который принимает необязательный параметр - число (`paramNum`).
(число также всегда меньше или равно количеству символов в строке)
если число есть, то `num = classNum - paramNum`, если нет, то `num = classNum`
функция возвращает `str`, в которой часть строки перевёрнута
если `num > 0`, то первые `num` символов, если `num < 0`, то последние `num` символов
например строка
    `str = 'это строка', num = 2, result = 'тэо строка'`
    `num = -2, result = 'это строак'`
    `num = 10, result = 'акортс отэ'`*/

class Task3Class {
    static str: string = "это строка"
    static classNum: number = 5

    static get getMostPopSymbol() {
        let collectionSymbols = new Map();
        for (let i = 0; i < this.str.length; i++) {
            if (!(this.str[i] in Object.fromEntries(collectionSymbols))) collectionSymbols.set(this.str[i], 1);
            else collectionSymbols.set(this.str[i], collectionSymbols.get(this.str[i]) + 1);
        }
        let mostPopSymbol = "";
        let symbolCount = 0;
        for (let [i, c] of collectionSymbols.entries()) {
            if (c > symbolCount) {
                symbolCount = c;
                mostPopSymbol = i;
            }
        }
        return mostPopSymbol;
    }

    static methodPart2(paramNum?: number) {
        let num = (paramNum != undefined) ? this.classNum - paramNum : this.classNum;
        let reversedString = (num>0) ?
            this.str.
            split("").
            slice(0, num).
            reverse().
            join("")+this.str.
            slice(num) :
            this.str.
            slice(0,this.str.length+num) + this.str.
            split("").
            slice(num).
            reverse().
            join("");
        return reversedString;
    }

}
console.log(Task3Class.getMostPopSymbol);
console.log(Task3Class.methodPart2(2));
