import { Client } from "./Client";
import { Custodian } from "./Custodian";
import { Instrument } from "./Instrument";

export class TradeHistory {
    constructor(public id: string,
        public sendercustodianid: Custodian,
        public receivercustodianid: Custodian,
        public senderclientid: Client,
        public receiverclientid: Client,
        public instrumentid: Instrument,
        public price: number,
        public quantity: number,
        public createdat: Date) {
    }
}