import {Calculator} from "./Calculator.js";
import {TestStatus} from "./TestStatus.js";
import {Colors} from "./Colors.js";

//в каждом методе по 1 тесту зафейлил специально
export class TestsCalculator {
    constructor() {
    }
    public checkSum () :void {
        const sumPositiveNum :number = new Calculator().sumNumbers(2,5);
        (sumPositiveNum == 7) ?
            console.log(Colors.green,`sum positive numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`sum positive numbers : ${TestStatus.failed}`);

        const sumNegativeNum :number = new Calculator().sumNumbers(-5,-3);
        (sumNegativeNum == -8) ?
            console.log(Colors.green,`sum negative numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`sum negative numbers : ${TestStatus.failed}`);

        const emptyData :number = new Calculator().sumNumbers();
        (emptyData == 0) ?
            console.log(Colors.green,`empty data : ${TestStatus.passed}`) :
            console.log(Colors.red,`empty data : ${TestStatus.failed}`);

        const sumMoreTwoNum :number = new Calculator().sumNumbers(2,3,5,-3);
        (sumMoreTwoNum == 5) ?
            console.log(Colors.green,`sum more than two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`sum more than two numbers : ${TestStatus.failed}`);

        const sumFractNum :number = new Calculator().sumNumbers(2.3,5.2,1.7);
        (sumFractNum == 9.2) ?
            console.log(Colors.green,`sum fractional numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`sum fractional numbers : ${TestStatus.failed}`)
    }

    public checkDivide () : void {
        const divByZero :number | string = new Calculator().divideNumbers(2,3,0);
        (divByZero == "Cant divide by zero") ?
            console.log(Colors.green,`divide by zero : ${TestStatus.passed}`) :
            console.log(Colors.red ,`divide by zero : ${TestStatus.failed}`);

        const divTwoNumbers :number | string = new Calculator().divideNumbers(6,4);
        (divTwoNumbers == 1.5) ?
            console.log(Colors.green,`divide two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`divide two numbers : ${TestStatus.failed}`);

        const divMoreTwoNum :number | string = new Calculator().divideNumbers(20,5,2);
        (divMoreTwoNum == 2) ?
            console.log(Colors.green,`divide more than two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`divide more than two numbers : ${TestStatus.failed}`);

        const decRound :number | string = new Calculator().divideNumbers(5.33333,2.123);
        (decRound == 2.52) ?
            console.log(Colors.green,`decimal rounding : ${TestStatus.passed}`) :
            console.log(Colors.red,`decimal rounding : ${TestStatus.failed}`);
    }
    public checkMultiply () : void {
        const mulTwoNum :number = new Calculator().multiplyNumbers(2,6);
        (mulTwoNum == 12) ?
            console.log(Colors.green,`multiply two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`multiply two numbers : ${TestStatus.failed}`);

        const mulMoreTwoNum :number  = new Calculator().multiplyNumbers(2,-3,5,2);
        (mulMoreTwoNum == -61) ?
            console.log(Colors.green,`multiply more than two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`multiply more than two numbers : ${TestStatus.failed}`);

        const mulWithZero :number = new Calculator().multiplyNumbers(2,3,5,0,5);
        (mulWithZero == 0) ?
            console.log(Colors.green,`multiply with zero : ${TestStatus.passed}`) :
            console.log(Colors.red,`multiply with zero : ${TestStatus.failed}`);

        const decRound :number = new Calculator().multiplyNumbers(2.333,5.345,1.213);
        (decRound == 15.13) ?
            console.log(Colors.green,`decimal rounding : ${TestStatus.passed}`) :
            console.log(Colors.red,`decimal rounding : ${TestStatus.failed}`)
    }

    public checkSubtract () : void {
        const subTwoNum : number = new Calculator().subtractNumbers(55,32);
        (subTwoNum == 23) ?
            console.log(Colors.green,`subtract two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`subtract two numbers : ${TestStatus.failed}`);

        const subMoreTwoNum : number = new Calculator().subtractNumbers(15,5,6);
        (subMoreTwoNum == 5) ?
            console.log(Colors.green,`subtract more than two numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`subtract more than two numbers : ${TestStatus.failed}`);

        const subNegativeNum : number = new Calculator().subtractNumbers(5,-10,-13);
        (subNegativeNum == 28) ?
            console.log(Colors.green,`subtract with negative numbers : ${TestStatus.passed}`) :
            console.log(Colors.red,`subtract with negative numbers : ${TestStatus.failed}`);

        const emptyData : number = new Calculator().subtractNumbers();
        (emptyData == 0) ?
            console.log(Colors.green,`empty data : ${TestStatus.passed}`) :
            console.log(Colors.red,`empty data : ${TestStatus.failed}`);
    }

    public checkMathPow () {
        const powIsZero : number = new Calculator().powNumbers(12,0);
        (powIsZero == 1) ?
            console.log(Colors.green,`pow value is 0 : ${TestStatus.passed}`) :
            console.log(Colors.red,`pow value is 0 : ${TestStatus.failed}`);

        const powIsOne : number = new Calculator().powNumbers(10,1);
        (powIsOne == 10) ?
            console.log(Colors.green,`pow value is 1 : ${TestStatus.passed} `) :
            console.log(Colors.red,`pow value is 1 : ${TestStatus.failed} `);

        const negativePow : number = new Calculator().powNumbers(5,-3);
        (negativePow == 5) ?
            console.log(Colors.green,`with negative pow value : ${TestStatus.passed}`) :
            console.log(Colors.red,`with negative pow value : ${TestStatus.failed}`);

        const positivePow : number = new Calculator().powNumbers(3,3);
        (positivePow == 27) ?
            console.log(Colors.green,`with positive pow value : ${TestStatus.passed}`) :
            console.log(Colors.green,`with positive pow value : ${TestStatus.passed}`);
    }

    public checkFull () : void {
        console.log(`sum tests results :`);
        new TestsCalculator().checkSum();
        console.log(`divide tests results :`);
        new TestsCalculator().checkDivide();
        console.log(`subtract tests results :`);
        new TestsCalculator().checkSubtract();
        console.log(`multiply tests results :`);
        new TestsCalculator().checkMultiply();
        console.log(`pow tests results :`);
        new TestsCalculator().checkMathPow();
    }

}
