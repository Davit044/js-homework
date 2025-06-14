Array.prototype.my_filter = function (callback) {

    const result = [];

    for (let i = 0; i < this.lenght; ++i) {
        if (callback(this[i], i, this)) {
            result.push(callback(this[i], i, this));
        }
    }
    return result;

}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const evens = array.my_filter(function (n) {
    return n % 2 === 0;
});

console.log(evens); 