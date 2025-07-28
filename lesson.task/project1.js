class Product {

    constructor(name, price, description) {

        if (new.target === Product) {
            throw new Error("Abstract class");
        }

        this.name = name;
        this.price = price;
        this.description = description;
        this.reviews = [];

    };

    getDetails() {
        throw new Error("Abstract method");

    };

    getAverageRating() {
        if (this.reviews.length === 0) return 0;

        let sum = 0;
        for (const r of this.reviews) {
            sum += r.rating;
        }

        return sum / this.reviews.length;

    };

};

class ElectronicsProducts extends Product {

    constructor(name, price, description, brand, size) {
        super(name, price, description);
        this.brand = brand;
        this.size = size;
    };

    getDetails() {
        return `Electronics: ${this.name}, ${this.brand}, ${this.price}$`;
    };

};

class ClothingProduct extends Product {

    constructor(name, price, description, brand, size) {
        super(name, price, description);
        this.brand = brand;
        this.size = size;
    };

    getDetails() {
        return `Clothes: ${this.name}, ${this.brand}, ${this.price}$`;
    }

};

class Catalog {

    static products = [];

    static addProduct(product) {
        this.products.push(product);
    };

    static search(keyword) {
        keyword = keyword.toLowerCase();
        return this.products.filter(p =>
            p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword));
    };

};

class Customer {

    orderHistory = [];
    reviews = [];

    constructor(name, email) {
        this.name = name;
        this.email = email;
    };

    searchProducts(keyword) {
        return Catalog.search(keyword);
    };

    placeOrder(productsArray) {
        const order = new OnlineOrder(Date.now(), this, productsArray, new Date());
        order.calculateTotalPrice();
        order.processPayment();
        this.orderHistory.push(order);
    };

    viewOrderHistory() {
        this.orderHistory.forEach(order => {
            console.log(`Order ID: ${order.orderId}`);
            console.log(`Total: ${order.totalPrice}$`);
            console.log(`Status: ${order.status}`);
            console.log("Products:");
            order.products.forEach(p => console.log(` - ${p.name}`));
            console.log("----------------------");
        });
    };


    leaveReview(product, rating, comment) {
        const review = new Review(product, rating, comment, this);
        this.reviews.push(review);
        product.reviews.push(review);
    };

};

class Review {

    constructor(product, rating, comment, customer) {
        this.product = product;
        this.rating = rating;
        this.comment = comment;
        this.customer = customer;
    };

};

class OrderBase {

    constructor(orderId, customer, products, createdAt) {
        if (new.target === OrderBase) throw new Error("Abstract class");

        this.orderId = orderId;
        this.customer = customer;
        this.products = products;
        this.createdAt = createdAt;
    };

    calculateTotalPrice() {
        throw new Error("Abstract method");
    };

    processPayment() {
        throw new Error("Abstract method");
    };

};

class OnlineOrder extends OrderBase {

    constructor(orderId, customer, products, createdAt) {
        super(orderId, customer, products, createdAt);
        this.status = "pending";
    };

    calculateTotalPrice() {
        this.totalPrice = this.products.reduce((sum, p) => sum + p.price, 0);
        return this.totalPrice;
    }


    processPayment() {
        console.log("Your payment on the process");
        this.status = "completed";
    };

};

const phone = new ElectronicsProducts("iPhone", 1000, "Apple smartphone", "Apple", "6.1 inch");
const tshirt = new ClothingProduct("T-shirt", 20, "Cotton T-shirt", "Nike", "M");

Catalog.addProduct(phone);
Catalog.addProduct(tshirt);

const davit = new Customer("Davit", "davit@mail.com");

console.log("Search results:", davit.searchProducts("iPhone"));

davit.placeOrder([phone, tshirt]);
davit.leaveReview(phone, 5, "Very good phone.");

console.log("Phone average rating:", phone.getAverageRating());
