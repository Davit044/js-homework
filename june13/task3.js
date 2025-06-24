const student = {
    name: "Davit",
    age: 21,
    good_student: true
}

Object.freeze(student);

console.log(delete student.age); 