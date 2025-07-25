
const s1 = Symbol.for('session');
const obj1 = { [s1]: "first" };

const s2 = Symbol.for('session');
const obj2 = { [s2]: "second" };

console.log(obj1[s1]);
console.log(obj2[s2]);
console.log(s1 === s2);

//2
const key = Symbol.keyFor(s1);
console.log(key); // "session"

//3

const uniqueSym = Symbol('unique');
const globalSym1 = Symbol.for('global');
const globalSym2 = Symbol.for('global');

console.log(uniqueSym === Symbol('unique'));
console.log(globalSym1 === globalSym2); 
