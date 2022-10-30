/*
#### Task 4.
Написать функцию, которая принимает:
    массив чисел
объект {from: number, to: number, includeFrom?: boolean, includeTo?: boolean}
Вернуть true, если все числа из массива входят в диапазон
includeFrom и includeTo показывают, включать from и to в диапазон или нет*/
type typeObj = {from: number, to: number, includeFrom?: boolean, includeTo?: boolean};

const objFromToData : typeObj = {
    from: 1,
    to: 5,
    includeFrom: false,
    includeTo: true
}

function someFunc(obj : typeObj,...someArr: number[]) {
    return someArr.every(function (value) {
 if (obj.includeFrom == true){
     if(obj.includeTo == true) return value>=obj.from && value<=obj.to;
     else return value>=obj.from && value<obj.to;
 }
 else if (obj.includeTo == true) return value>obj.from && value<=obj.to;
 else return value>obj.from && value<obj.to;
    }
    )
}

console.log(someFunc(objFromToData,2,3,4,5));
