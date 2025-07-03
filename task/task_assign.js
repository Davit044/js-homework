class Serial_Number {

    static count = 0;
    #serialNumber;

    constructor() {

        Serial_Number.count++;
        this.#serialNumber = Serial_Number.count;

    }

    getSerialNumber() {

        return `seria - ${this.#serialNumber} `
    }


}

const num1 = new Serial_Number;
const num2 = new Serial_Number;
const num3 = new Serial_Number;

console.log(num1.getSerialNumber());
console.log(num2.getSerialNumber());
console.log(num3.getSerialNumber());