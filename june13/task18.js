const students = {
    number1: 'Alfred',
    number2: 'Betty',
    number3: 'Charlie',
    number4: 'Diana',

}

function toArray(obj) {

    const arr = Object.values(obj);

    return arr.map(value => typeof value === 'string' ? value.toUpperCase() : value);
}

const res = toArray(students);
console.log(res);
