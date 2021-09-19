export class Instrument{
    constructor(public instrumentid: string,
        public instrumentname: string,
        public facevalue: number,
        public minquantity: number,
        public expiry: Date) {
    }
}