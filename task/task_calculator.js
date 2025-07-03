class Calculator {

    #operand1;
    #operand2;

    set(num1, num2) {

        this.#operand1 = num1;
        this.#operand2 = num2;

    }

    add() {

        return this.#operand1 + this.#operand2;

    }

    sub() {

        return this.#operand1 - this.#operand2;

    }

    mul() {

        return this.#operand1 * this.#operand2;

    }

    div() {

        if (this.#operand2 === 0) {

            return "Division by zero is not allowed.";

        } else {
            return this.#operand1 / this.#operand2;
        }

    }

    modulo() {

        if (this.#operand2 === 0) {

            return "Division by zero is not allowed.";

        } else {
            return this.#operand1 % this.#operand2;
        }

    }

}

const num = new Calculator;

num.set(10, 5);

console.log(num.add());
console.log(num.sub());
console.log(num.mul());
console.log(num.div());
console.log(num.modulo());