class Animal {

    constructor() {
        if (new.target === Animal) {
            throw new Error("Abstract class");
        }
    }

    speak() {

        if (new.target === Animal) {
            throw new Error("Cannot use abstract method 'speak'");
        }

    }

}

class Dog extends Animal {

    constructor(name) {
        super();
        this.name = name;
    }

    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }

}

const dog = new Dog("Buddy");
dog.speak(); 