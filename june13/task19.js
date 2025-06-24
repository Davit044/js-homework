const student = {
    name: "Bill",
    age: 33,
    city: "New York",
}

const str = JSON.stringify(student);

const obj = JSON.parse(str);

console.log(str);