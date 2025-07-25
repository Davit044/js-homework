const s1 = Symbol("hello");
const s2 = Symbol("hello");

const obj = {
    [s1]: "first",
    [s2]: "second",
}

console.log(obj[s1]);
console.log(obj[s2]);

console.log(Object.getOwnPropertySymbols(obj)); 