const person1 = {
    name: "James"
}

const person2 = {
    age: 30
}

const mergedPerson = Object.assign({}, person1, person2);
console.log(mergedPerson);