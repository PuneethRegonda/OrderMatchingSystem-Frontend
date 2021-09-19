import { TradeHistory } from "./TradeHistory";

export class LastTrade{
    constructor(public id: string,
        public tradehistory: TradeHistory,
        public createdat: Date){

    }
}