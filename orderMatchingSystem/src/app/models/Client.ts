import { Custodian } from "./Custodian";

export class Client{
    constructor(public clientid: string,
       public clientname: string,
       public custodianid: Custodian,
       public transactionlimit: number,
       public balance: number){

    }
}