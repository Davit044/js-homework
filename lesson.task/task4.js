class Employee {

    constructor(name) {
        if (this.constructor === Employee) {
            throw new Error("Cannot instantiate abstract class Employee");
        }
        this.name = name;
    }
    getSalary() {
        throw new Error("Method 'getSalary()' must be implemented.");
    }

}

class FullTimeEmployee extends Employee {

    constructor(name, salary) {

        super(name);
        this.monthlySalary = salary;

    }

    getSalary() {
        return this.monthlySalary;
    }

}

class PartTimeEmployee extends Employee {

    constructor(name, hourlyRate, hours) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hours = hours;
    }

    getSalary() {
        return this.hourlyRate * this.hours;
    }

}

class Freelancer extends Employee {

    constructor(name, projectFee) {
        super(name);
        this.salary = projectFee;
    }

    getSalary() {
        return this.salary;;
    }

}

const employees = [
    new FullTimeEmployee("Alice", 1000),
    new PartTimeEmployee("Bob", 20, 35),
    new Freelancer("Jim", 500),
];

for (const emp of employees) {
    console.log(`${emp.name} earns $${emp.getSalary()}`);
}


