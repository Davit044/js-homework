const obj = {
    0: 'first',
    1: 'secondl',
    length: 2
};

console.log([].concat(obj));
obj[Symbol.isConcatSpreadable] = false;
console.log([].concat(obj));


const myarr = ['a', 'b'];
console.log(myarr.concat(obj));
obj[Symbol.isConcatSpreadable] = true;
console.log(myarr.concat(obj));


