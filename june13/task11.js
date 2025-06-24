function shallowMerge(...objects) {
    const result = {};
    for (const obj of objects) {
        Object.assign(result, obj);
    }
    return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = shallowMerge(obj1, obj2);
console.log(merged); 