const arr = [{ name: "Jerry", age: 33, isStudent: true }, { name: "Tom", age: 25, city: "New York" }, { name: "Anna", age: 23, isWorker: true }];

function UniqueKeys(arr) {

    const UniqueObj = {};

    for (const obj of arr) {
        for (const key of Object.keys(obj)) {
            UniqueObj[key] = true;

        }
    }
    return UniqueObj;
}

console.log(UniqueKeys(arr));




