export class Instrument{
    constructor(public instrumentid: string,
        public instrumentname: string,
        public facevalue: number,
        public minquanity: number,
        public expiry: Date) {
    }
}