// @ts-ignore
import {Car} from './Car.ts';
// @ts-ignore
import {FuelCost,Bills} from "./Bills.ts";
import * as fs from "fs";

enum  BmwEquip {
    low,
    middle,
    high
}

export class Bmw extends Car {
    private static readonly carName : string = "bmw";
    fuelConsuption: number;
    fuelReserve: number;
    volume: number;
    fuelType: "diesel" | "gas" | "petrol";
    constructor(volume: number, fuelConsuption: number, fuelReserve: number, fuelType: "diesel" | "gas" | "petrol") {
        super(fuelConsuption, fuelReserve, volume,fuelType);
        this.volume = volume;
        this.fuelReserve = fuelReserve;
        this.fuelConsuption = fuelConsuption;
        this.fuelType = fuelType;
    }
public drive(distance: number) {
    super.drive(distance);
}
public static getCost (equip : "low" | "middle" | "high") : number | string {

let fileData = fs.readFileSync("HW12/bmw.txt","utf-8").
replace(/\s\W\s/g,", ").
replace(/;/, "").
split(", ")

const checkPrice : number | string = (fileData.includes(equip)) ?
    Number(fileData.find((value, index) => fileData[index-1] == equip)) :
    "данного авто нет в продаже";

return checkPrice;
}

public buy (equipType : "low" | "middle" | "high") : void {
        if (typeof Bmw.getCost(equipType) == "number" ) {
            Bills.addBill(Bmw.carName, Bmw.getCost(equipType));
        }
}
}

export const bmwA1 = new Bmw(100,15,50,"gas");
