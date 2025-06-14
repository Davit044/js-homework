Array.prototype.my_Map = function (callback) {

    const result = [];

    for (let i = 0; i < this.lenght; ++i) {
        result.push(callback(this[i], i, this));
    }
    return result;

}

const array = [1, 2, 43];
const tripled = array.my_Map(function (n) {
    return n * 3;
});

console.log(tripled); 