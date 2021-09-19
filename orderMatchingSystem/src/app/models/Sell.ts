import { Client } from "./Client";
import { Instrument } from "./Instrument";

export class Sell{
    constructor(public id: string,
        public clientid: Client,
        public instrumentid: Instrument,
        public price: number,
        public quantity: number,
        public isactive: boolean,
        public createdate:Date){
    }
}