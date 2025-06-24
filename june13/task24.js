const sim1 = Symbol('id');
const sim2 = Symbol('number');
const sim3 = Symbol('mark')

const car = {
    ownerName: 'Jimmy',
    [sim1]: 34,
    [sim2]: '74 NM 747',
    [sim3]: "BMW"
};

console.log(car[sim1]);
console.log(car[sim2]);
console.log(car[sim3]);

const symbols = Object.getOwnPropertySymbols(car);
for (const sym of symbols) {
    console.log(`${sym.toString()}: ${car[sym]}`);
}

