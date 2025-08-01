class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ${amount} with Credit Card.`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Paid ${amount} with PayPal.`);
    }
}

class PaymentProcessor {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    process(amount) {
        this.paymentMethod.pay(amount);
    }
}

const creditPayment = new CreditCardPayment();
const paypalPayment = new PayPalPayment();

const processor1 = new PaymentProcessor(creditPayment);
processor1.process(100);

const processor2 = new PaymentProcessor(paypalPayment);
processor2.process(200); 
