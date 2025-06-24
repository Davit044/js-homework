function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}.`;
};

function Student(name, major) {
    Person.call(this, name);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I study ${this.major}.`;
};

const student = new Student("Bob", "Physics");
console.log(student.greet());

console.log(student instanceof Student);
console.log(student instanceof Person);
console.log(student instanceof Object);  