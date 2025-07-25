class Money {
    constructor(amount) {
        this.amount = amount;
    }

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return this.amount;
            case 'string':
                return `${this.amount} USD`;
            case 'default':
                return this.amount;
        }
    }
}

const money = new Money(100);
console.log(money + 50);

console.log(`balance is ${money}`);


console.log(money == 100); 