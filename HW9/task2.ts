/*
#### Task 2 💻
Написать класс человека, который принимает имя и рост в метрах в конструкторе
Класс имеет 1 статическое поле: коэффициент длины шага при беге = 0.65
И 1 статический метод, который принимает рост в качестве параметра и
вычисляет длину шага при ходьбе по формуле `Рост / 4) + 0,37`
Написать в классе геттер для получения длины шага при беге = `коэффициент длины шага * рост`
И написать метод, `logWalkStep`, который выводит в консоль `Длина вашего шага ${length}`
вывести в консоль геттер и вызвать `logWalkStep`*/

class HumanData {
    static coefPace : number = 0.65
    name: string
    height: number
    constructor(name:string, height:number) {
        this.name=name;
        this.height=height
    }
static getPace (height:number) {
        const pace = (height/4) + 0.37;
        return pace;
}
get getPaceRun () {
        const paceLenght = HumanData.coefPace* this.height;
        return paceLenght;
}
    logWalkStep () {
         console.log(`Длина вашего шага ${HumanData.getPace(this.height)}`);
    }
}
const humanData = new HumanData("test",200);
console.log(humanData.getPaceRun);
humanData.logWalkStep();