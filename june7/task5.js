function my_Every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const arr = [2, 4, 6, 8];
const evens = my_Every(arr, function (num) {
    return num % 2 === 0;
});
console.log(evens);  