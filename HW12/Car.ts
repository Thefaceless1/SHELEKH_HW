// @ts-ignore
import {FuelCost} from "./Bills.ts";

export abstract class Car {
    abstract volume : number;
    abstract fuelConsuption : number;
    abstract fuelReserve : number;
    abstract fuelType : "diesel" | "gas" | "petrol";
    constructor(volume: number, fuelConsuption: number, fuelReserve: number, fuelType : "diesel" | "gas" | "petrol") {
    }

protected drive (distance : number) : void {
        const checkFuel = this.fuelReserve - ((this.fuelConsuption*distance)/100);
        if (checkFuel<0){
            this.refuel(10);
            this.drive(distance);
        }
}
private refuel (fueQuantity? : number) : void {
        let fuelCost : number =0;
        if (fueQuantity)  {
            fuelCost = fueQuantity*FuelCost[this.fuelType];
            this.fuelReserve+=fueQuantity;
        }
        else {
            fuelCost = (this.fuelReserve<this.volume) ?
                (this.volume - this.fuelReserve)*FuelCost[this.fuelType] :
                this.volume*FuelCost[this.fuelType];
            this.fuelReserve += this.volume;
        }
}
}