Array.prototype.my_indexOf(searchel, fromindex = 0) {
    for (let i = fromindex; i < this.length; i++) {
        if (this[i] === searchel) {
            return i;
        }
    }
    return -1;
}

const arr = [3, 6, 9, 12];
console.log(arr.my_indexof(9));
console.log(arr.my_indexOf(5));   
