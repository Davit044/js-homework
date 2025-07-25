class NestedIterator {
    constructor(nestedArray) {
        this.nestedArray = nestedArray;
    }

    *[Symbol.iterator]() {
        for (const element of this.nestedArray) {
            if (Array.isArray(element)) {
                yield* new NestedIterator(element);
            } else {
                yield element;
            }
        }
    }
}


const nestedArray = [1, [2, [3, 4], 5], 6];
const iterator = new NestedIterator(nestedArray);

for (const value of iterator) {
    console.log(value);
}


console.log([...iterator]); 