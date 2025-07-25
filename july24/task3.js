class AdminOnly {
    static [Symbol.hasInstance](obj) {
        return obj.role === 'admin';
    }
}

const user1 = { role: 'admin', name: 'Davit' };
const user2 = { role: 'client', name: 'Karen' };
const user3 = { name: 'Artur' };

console.log(user1 instanceof AdminOnly);
console.log(user2 instanceof AdminOnly);
console.log(user3 instanceof AdminOnly); 
