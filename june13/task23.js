function Animal(name) {
    this.name = name;
}

const a1 = new Animal("Dog");
const a2 = new Animal("Cat");

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}

a1.speak();