function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const obj1 = { name: 'Davit', age: 25 };
const obj2 = { name: 'Davit', age: 25 };
const obj3 = { name: 'Davit', age: 30 };

console.log(isEqual(obj1, obj2));
console.log(isEqual(obj1, obj3));


