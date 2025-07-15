Array.prototype.my_some(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true;
    }
    return false;
}

const arr = [1, 2, 3, 4];
const have_even = arr.my_some(function (num) {
    return num % 2 === 0;
});
console.log(have_even);
