class Shape {
    area() {
        throw new Error("area() must be implemented by subclass.");
    };
};

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    };

    area() {
        return this.width * this.height;
    };
};

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    };

    area() {
        return this.side * this.side;
    };
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    };

    area() {
        return Math.PI * this.radius * this.radius;
    };
};

function renderArea(shape) {
    console.log("Area is", shape.area());
}

const rectangle = new Rectangle(5, 10);
const square = new Square(5);
const circle = new Circle(3);

renderArea(rectangle);
renderArea(square);
renderArea(circle);


