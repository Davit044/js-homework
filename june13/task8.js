function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car("Toyota", "Corolla", 2020);

Car.prototype.getDescription = function () {
    return `${this.year} ${this.make} ${this.model}`;
};

console.log(myCar.getDescription()); 
