// @ts-ignore
import {Audi,audiA2} from "./Audi.ts";
// @ts-ignore
import {Bmw,bmwA1} from './Bmw.ts';

export enum FuelCost {
    diesel =5,
    gas =2,
    petrol=3
}
class BillSumObj {
    [key:string] : number
}
export class Bills {
     private static debtSum : number =0;
     static billSum : BillSumObj = {};

    public static getBill (paramSum : string) : number {
        return  Bills.billSum[paramSum];
    }
    public static addBill (bill: string, sum: number) : void {
        const limitSum = 100000;
        Bills.billSum[bill] = sum;
        Bills.debtSum +=sum;
        if (Bills.debtSum >limitSum) Bills.billSum["tax"] = Bills.debtSum - limitSum;
    }
}

Bills.addBill("flat",300);
Bills.addBill("phone",200);
bmwA1.buy("middle");
audiA2.buy("business");

console.log(Bills.billSum);

