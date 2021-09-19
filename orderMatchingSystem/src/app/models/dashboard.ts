import { LastTrade } from "./lastTrade";

export class Dashboard{
    constructor(public sellTrades: number,
        public totalTrades: number,
        public lastTrade: LastTrade,
        public buyTrades: number,
        public clientsCount: number) {

    }
}