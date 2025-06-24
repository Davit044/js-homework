const user = {
    name: 'Davit',
    age: 21,
    contact: {
        email: 'davit@example.com',
        phone: '123-456-7890',
    },

    address: {
        city: 'Yerevan',
        zipCode: '0001',
    }
}

const {
    contact: { email },
    address: { city },
} = user;

console.log(email);
console.log(city);
console.log(age); 