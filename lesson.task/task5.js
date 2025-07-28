class Device {

    info() {
        console.log("device");
    }

}

class Computer extends Device {

    info() {
        super.info();
        console.log("computer");
    }

}

class Laptop extends Computer {

    info() {
        super.info();
        console.log("laptop");
    }

}

const myLaptop = new Laptop();
myLaptop.info(); 