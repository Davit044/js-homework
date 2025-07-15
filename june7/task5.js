Array.prototype.my_every(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

const arr = [2, 4, 6, 8];
const evens = arr.my_every(function (num) {
    return num % 2 === 0;
});
console.log(evens);  
