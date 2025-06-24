
Array.prototype.my_forEach = function (callback) {

    for (let i = 0; i < this.lenght; ++i) {
        callback(this[i], i, this);
    }
}

const arr = [1, 2, 3, "banana", 5, 8, "close"];

array.my_forEach(function (val, index, arr) {
    console.log(`Value: ${val}, Index: ${index}, Array: [${arr}]`);
});
