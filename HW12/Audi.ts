// @ts-ignore
import {Car} from './Car.ts';
// @ts-ignore
import {FuelCost,Bills} from "./Bills.ts";
import fs from "fs";

enum AudiEquip {
    basic,
    standard,
    business,
    luxury
}

export class Audi extends Car {
    private static readonly carName : string = "audi";
    fuelConsuption: number;
    fuelReserve: number;
    volume: number;
    fuelType : "diesel" | "gas" | "petrol";
    constructor(volume: number, fuelConsuption: number, fuelReserve: number, fuelType : "diesel" | "gas" | "petrol") {
        super(fuelConsuption,fuelReserve,volume, fuelType);
        this.volume = volume;
        this.fuelReserve = fuelReserve;
        this.fuelConsuption =fuelConsuption;
        this.fuelType = fuelType;
    }
    public drive(distance: number) {
        super.drive(distance);
    }
    public static getCost (equip : "basic" | "standard" | "business" | "luxury") : number | string {

        let fileData = fs.readFileSync("HW12/audi.txt","utf-8").
        replace(/\s\W\s/g,", ").
        replace(/;/, "").
        split(", ")

        const checkPrice : number | string = (fileData.includes(equip)) ?
            Number(fileData.find((value, index) => fileData[index-1] == equip)) :
            "данного авто нет в продаже";

        return checkPrice;
    }
    public buy (equipType : "basic" | "standard" | "business" | "luxury") : void {
        if (typeof Audi.getCost(equipType) == "number") {
            Bills.addBill(Audi.carName, Audi.getCost(equipType));
        }
    }
}

export const audiA2 = new Audi(120,10,40,"diesel");