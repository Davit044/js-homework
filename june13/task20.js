const person = {
    name: "David",
    age: 21,
    city: "Yerevan",
    zip: 46,
    isStudent: true
}

function objectFiltring() {

    const arr = Object.entries(person);
    const filteredArr = arr.filter(function (num) {
        return typeof (num[1]) === "number";
    })

    return filteredArr;
}

const filteredObj = Object.fromEntries(objectFiltring(person));
console.log(filteredObj);
